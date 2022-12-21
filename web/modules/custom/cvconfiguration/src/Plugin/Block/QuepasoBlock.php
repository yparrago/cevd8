<?php

namespace Drupal\cvconfiguration\Plugin\Block;
use Drupal\node\Entity\Node;

use Drupal\Core\Block\BlockBase;

/**
 * Provides an QuepasoBlock block.
 *
 * @Block(
 *   id = "QuepasoBlock",
 *  admin_label = @Translation("Bloque sección derechos humanos Que paso"),
 * )
 */
class QuepasoBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    // Configuraciones del sitio
    $settings = \Drupal::config('cvconfiguration.settings');
    $viewBuilder = \Drupal::entityTypeManager()->getViewBuilder('node');

    //$vistaOpinion = views_embed_view('home','block_opinion');

    $renderNodes = [];
    $selectorNodes = [];
    for($i = 1 ; $i < 7 ; $i++){
      if($settings->get('quepaso_'.$i)){
        $node = Node::load($settings->get('quepaso_'.$i));
        if(isset($node)){$renderNodes[] = $viewBuilder->view($node,'quepaso');
        $selectorNodes[] = $viewBuilder->view($node,'selector_quepaso');
	}
      }
    }

    //print_r(var_dump($selectorNodes, true));
    //exit;

    $build = array(
      '#theme' => 'quepaso_seccion',
      'quepaso_block' => array(
        '#markup' => 'Implement QuepasoBlock',
      ),
      '#nodes' => $renderNodes,
      '#selectors' => $selectorNodes,
      //'#vista_opinion' => drupal_render($vistaOpinion),
    );

    return $build;
  }

}
