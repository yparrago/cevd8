<?php

namespace Drupal\jerrejerre_carousel\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides an example block.
 *
 * @Block(
 *   id = "jerrejerre_carousel_example",
 *   admin_label = @Translation("Example"),
 *   category = @Translation("Jerrejerre carousel")
 * )
 */
class ExampleBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build['content'] = [
      '#markup' => $this->t('It works!'),
    ];
    return $build;
  }

}
