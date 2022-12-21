<?php

namespace Drupal\cev_rest\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for CEV Rest Resource routes.
 */
class CevRestController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build($node) {
    $output = $this->loadRecord($node, 'full');
    $renderable = [
      '#theme' => 'externalnode',
      '#output' => $output,
    ];
    $rendered = \Drupal::service('renderer')->renderPlain($renderable);

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $rendered,
    ];

    return $build;
  }

     /**
   * Loads record from database.
   *
   * @param int $id
   *   The ID of the record.
   *
   * @return array
   *   The database record.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
   */
  protected function loadRecord($id, $viewmode) {
    $entity_type = 'node';
    $view_builder = \Drupal::entityTypeManager()->getViewBuilder($entity_type);
    $node = \Drupal\node\Entity\Node::load($id);
    if (!$node) {
      throw new NotFoundHttpException('The record was not found.');
    }
    $build = $view_builder->view($node, $viewmode);
    $output = \Drupal::service('renderer')->render($build);
    return $output;
  }

}
