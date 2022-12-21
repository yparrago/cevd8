<?php

namespace Drupal\cvconfiguration\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for cvconfiguration routes.
 */
class CvconfigurationController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
