<?php

namespace Drupal\jerrejerre_carousel\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Jerrejerre carousel routes.
 */
class JerrejerreCarouselController extends ControllerBase {

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
