<?php

namespace Drupal\cvconfiguration\Plugin\Block;
use Drupal\node\Entity\Node;

use Drupal\Core\Block\BlockBase;

/**
 * Provides an 'PorquepasoBlock' block.
 *
 * @Block(
 *   id = "PorquepasoBlock",
 *  admin_label = @Translation("Bloque sección derechos humanos Por que paso"),
 * )
 */
class PorquepasoBlock extends BlockBase
{

  /**
   * {@inheritdoc}
   */
  public function build()
  {
    // Configuraciones del sitio
    $settings = \Drupal::config('cvconfiguration.settings');
    $viewBuilder = \Drupal::entityTypeManager()->getViewBuilder('node');

    //$vistaOpinion = views_embed_view('home','block_opinion');

    $renderNodes = [];
    $selectorNodes = [];
    for ($i = 1; $i < 4; $i++) {
      if ($settings->get('porquepaso_'.$i)) {
        $node = Node::load($settings->get('porquepaso_'.$i));
        if (isset($node)) {
          $renderNodes[] = $viewBuilder->view($node, 'porquepaso');
          $selectorNodes[] = $viewBuilder->view($node, 'selector_porquepaso');
        }
      }
    }

    //print_r(var_dump($selectorNodes, true));
    //exit;

    $build = array(
      '#theme' => 'porquepaso_seccion',
      'porquepasoBlock' => array(
        '#markup' => 'Implement PorquepasoBlock.',
      ),
      '#nodes' => $renderNodes,
      '#selectors' => $selectorNodes,
      //'#vista_opinion' => drupal_render($vistaOpinion),
    );

    return $build;
  }
}
