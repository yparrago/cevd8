<?php

namespace Drupal\cvconfiguration\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;
use Drupal\taxonomy\Entity\Term;

/**
 * Configure cvconfiguration settings for this site.
 */
class SettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'cvconfiguration_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['cvconfiguration.settings'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('cvconfiguration.settings');
    
    /********************/
    /**** ¿Qué pasó? ****/
    /********************/
    $form['quepaso'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Contenidos en el bloque de ¿Qué pasó?'),
      '#description' => $this->t('Contenidos de tipo derechos humanos'),
    ];
    $form['quepaso']['quepaso_1'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Contenido 1'),
      '#description' => $this->t('Contenido en la sección de derechos humanos'),
      '#default_value' => $config->get('quepaso_1') ? Node::load($config->get('quepaso_1')) : NULL,
      '#target_type' => 'node',
      '#selection_settings' => array(
        'target_bundles' => array('contenido_ddhh'),
      ),
      '#required' => TRUE,
    ];
    $form['quepaso']['quepaso_2'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Contenido 2'),
      '#description' => $this->t('Contenido en la sección de derechos humanos'),
      '#default_value' => $config->get('quepaso_2') ? Node::load($config->get('quepaso_2')) : NULL,
      '#target_type' => 'node',
      '#selection_settings' => array(
        'target_bundles' => array('contenido_ddhh'),
      ),
      '#required' => TRUE,
    ];
    $form['quepaso']['quepaso_3'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Contenido 3'),
      '#description' => $this->t('Contenido en la sección de derechos humanos'),
      '#default_value' => $config->get('quepaso_3') ? Node::load($config->get('quepaso_3')) : NULL,
      '#target_type' => 'node',
      '#selection_settings' => array(
        'target_bundles' => array('contenido_ddhh'),
      ),
      '#required' => TRUE,
    ];
    $form['quepaso']['quepaso_4'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Contenido 4'),
      '#description' => $this->t('Contenido en la sección de derechos humanos'),
      '#default_value' => $config->get('quepaso_4') ? Node::load($config->get('quepaso_4')) : NULL,
      '#target_type' => 'node',
      '#selection_settings' => array(
        'target_bundles' => array('contenido_ddhh'),
      ),
      '#required' => TRUE,
    ];
    $form['quepaso']['quepaso_5'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Contenido 5'),
      '#description' => $this->t('Contenido en la sección de derechos humanos'),
      '#default_value' => $config->get('quepaso_5') ? Node::load($config->get('quepaso_5')) : NULL,
      '#target_type' => 'node',
      '#selection_settings' => array(
        'target_bundles' => array('contenido_ddhh'),
      ),
      '#required' => TRUE,
    ];
    $form['quepaso']['quepaso_6'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Contenido 6'),
      '#description' => $this->t('Contenido en la sección de derechos humanos'),
      '#default_value' => $config->get('quepaso_6') ? Node::load($config->get('quepaso_6')) : NULL,
      '#target_type' => 'node',
      '#selection_settings' => array(
        'target_bundles' => array('contenido_ddhh'),
      ),
      '#required' => TRUE,
    ];
    
    
    /********************/
    /**** ¿Por Qué pasó? ****/
    /********************/
        $form['porquepaso'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Contenidos en el bloque de ¿Por qué pasó?'),
      '#description' => $this->t('Contenidos de tipo derechos humanos'),
    ];
    $form['porquepaso']['porquepaso_1'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Contenido 1'),
      '#description' => $this->t('Contenido en la sección de derechos humanos'),
      '#default_value' => $config->get('porquepaso_1') ? Node::load($config->get('porquepaso_1')) : NULL,
      '#target_type' => 'node',
      '#selection_settings' => array(
        'target_bundles' => array('contenido_ddhh'),
      ),
      '#required' => TRUE,
    ];
    $form['porquepaso']['porquepaso_2'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Contenido 2'),
      '#description' => $this->t('Contenido en la sección de derechos humanos'),
      '#default_value' => $config->get('porquepaso_2') ? Node::load($config->get('porquepaso_2')) : NULL,
      '#target_type' => 'node',
      '#selection_settings' => array(
        'target_bundles' => array('contenido_ddhh'),
      ),
      '#required' => TRUE,
    ];
    $form['porquepaso']['porquepaso_3'] = [
      '#type' => 'entity_autocomplete',
      '#title' => $this->t('Contenido 3'),
      '#description' => $this->t('Contenido en la sección de derechos humanos'),
      '#default_value' => $config->get('porquepaso_3') ? Node::load($config->get('porquepaso_3')) : NULL,
      '#target_type' => 'node',
      '#selection_settings' => array(
        'target_bundles' => array('contenido_ddhh'),
      ),
      '#required' => TRUE,
    ];
    return parent::buildForm($form, $form_state);
  }


  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('cvconfiguration.settings')
      ->set('quepaso', $form_state->getValue('quepaso'))
      ->set('quepaso_1', $form_state->getValue('quepaso_1'))
      ->set('quepaso_2', $form_state->getValue('quepaso_2'))
      ->set('quepaso_3', $form_state->getValue('quepaso_3'))
      ->set('quepaso_4', $form_state->getValue('quepaso_4'))
      ->set('quepaso_5', $form_state->getValue('quepaso_5'))
      ->set('quepaso_6', $form_state->getValue('quepaso_6'))
      ->set('porquepaso', $form_state->getValue('porquepaso'))
      ->set('porquepaso_1', $form_state->getValue('porquepaso_1'))
      ->set('porquepaso_2', $form_state->getValue('porquepaso_2'))
      ->set('porquepaso_3', $form_state->getValue('porquepaso_3'))
      ->save();
    parent::submitForm($form, $form_state);
  }

}
