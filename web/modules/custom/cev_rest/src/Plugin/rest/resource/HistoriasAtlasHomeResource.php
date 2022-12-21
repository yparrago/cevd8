<?php

namespace Drupal\cev_rest\Plugin\rest\resource;

use Drupal\Component\Plugin\DependentPluginInterface;
use Drupal\Core\Database\Connection;
use Drupal\Core\Routing\BcRoute;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\Response;
use Drupal\file\Entity\File;

/**
 * Represents Historias atlas home records as resources.
 *
 * @RestResource (
 *   id = "cev_rest_historias_atlas_home",
 *   label = @Translation("Historias atlas home"),
 *   uri_paths = {
 *     "canonical" = "/api/cev-rest-historias-atlas-home",
 *     "https://www.drupal.org/link-relations/create" = "/api/cev-rest-historias-atlas-home"
 *   }
 * )
 *
 * @DCG
 * This plugin exposes database records as REST resources. In order to enable it
 * import the resource configuration into active configuration storage. You may
 * find an example of such configuration in the following file:
 * core/modules/rest/config/optional/rest.resource.entity.node.yml.
 * Alternatively you can make use of REST UI module.
 * @see https://www.drupal.org/project/restui
 * For accessing Drupal entities through REST interface use
 * \Drupal\rest\Plugin\rest\resource\EntityResource plugin.
 */
class HistoriasAtlasHomeResource extends ResourceBase implements DependentPluginInterface {

  /**
   * The database connection.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $dbConnection;

  /**
   * Constructs a Drupal\rest\Plugin\rest\resource\EntityResource object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param array $serializer_formats
   *   The available serialization formats.
   * @param \Psr\Log\LoggerInterface $logger
   *   A logger instance.
   * @param \Drupal\Core\Database\Connection $db_connection
   *   The database connection.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, array $serializer_formats, LoggerInterface $logger, Connection $db_connection) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);
    $this->dbConnection = $db_connection;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->getParameter('serializer.formats'),
      $container->get('logger.factory')->get('rest'),
      $container->get('database')
    );
  }

  /**
   * Responds to GET requests.
   *
   *
   * @return \Drupal\rest\ResourceResponse
   *   The response containing the record.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\HttpException
   */
  public function get() {
    $output =  $this->loadRecords();
    $response = new Response(
      $output,
      Response::HTTP_OK,
      array('content-type' => 'application/json')
    );
    return $response;
  }

  
  /**
   * {@inheritdoc}
   */
  public function calculateDependencies() {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  public function routes() {
    $collection = parent::routes();

    // Take out BC routes added in base class.
    // @see https://www.drupal.org/node/2865645
    // @todo Remove this in Drupal 9.
    foreach ($collection as $route_name => $route) {
      if ($route instanceof BcRoute) {
        $collection->remove($route_name);
      }
    }

    return $collection;
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
  protected function loadRecords() {
    //carga nodos de atlas
    $nids = \Drupal::entityQuery('node')->condition('type','atlas')->execute();
    $nodes =  \Drupal\node\Entity\Node::loadMultiple($nids);
    $json = [];
    // Grupo 1
    $grupo = new \stdClass();
    $grupo->id = "grupo1";
    $grupo->imagenes = [];
    foreach ($nodes as $key => $node) {
      $entrada = new \stdClass();
      $fid = $node->field_imagen_dinamica_1->getValue()[0]['target_id'];
      $file = File::load($fid);
      $entrada->imagen = file_create_url($file->getFileUri());
      $entrada->titulo = $node->field_titulo_dinamica_1->getValue()[0]['value'];
      $entrada->texto = $node->field_resumen_dinamica_1->getValue()[0]['value'];
      $entrada->enlace = \Drupal::service('path_alias.manager')->getAliasByPath('/node/'.$node->id());
      $grupo->imagenes[] = $entrada;
    }
    $json[] = $grupo;
    // Grupo 2
    $grupo = new \stdClass();
    $grupo->id = "grupo2";
    $grupo->imagenes = [];
    foreach ($nodes as $key => $node) {
      $entrada = new \stdClass();
      $fid = $node->field_imagen_dinamica_2->getValue()[0]['target_id'];
      $file = File::load($fid);
      $entrada->imagen = file_create_url($file->getFileUri());
      $entrada->titulo = $node->field_titulo_dinamica_2->getValue()[0]['value'];
      $entrada->texto = $node->field_resumen_dinamica_2->getValue()[0]['value'];
      $entrada->enlace = \Drupal::service('path_alias.manager')->getAliasByPath('/node/'.$node->id());
      $grupo->imagenes[] = $entrada;
    }
    $json[] = $grupo;
    // Grupo 3
    $grupo = new \stdClass();
    $grupo->id = "grupo3";
    $grupo->imagenes = [];
    foreach ($nodes as $key => $node) {
      $entrada = new \stdClass();
      $fid = $node->field_imagen_dinamica_3->getValue()[0]['target_id'];
      $file = File::load($fid);
      $entrada->imagen = file_create_url($file->getFileUri());
      $entrada->titulo = $node->field_titulo_dinamica_3->getValue()[0]['value'];
      $entrada->texto = $node->field_resumen_dinamica_3->getValue()[0]['value'];
      $entrada->enlace = \Drupal::service('path_alias.manager')->getAliasByPath('/node/'.$node->id());
      $grupo->imagenes[] = $entrada;
    }
    $json[] = $grupo;
    // Grupo 4
    $grupo = new \stdClass();
    $grupo->id = "grupo4";
    $grupo->imagenes = [];
    foreach ($nodes as $key => $node) {
      $entrada = new \stdClass();
      $fid = $node->field_imagen_dinamica_4->getValue()[0]['target_id'];
      $file = File::load($fid);
      $entrada->imagen = file_create_url($file->getFileUri());
      $entrada->titulo = $node->field_titulo_dinamica_4->getValue()[0]['value'];
      $entrada->texto = $node->field_resumen_dinamica_4->getValue()[0]['value'];
      $entrada->enlace = \Drupal::service('path_alias.manager')->getAliasByPath('/node/'.$node->id());
      $grupo->imagenes[] = $entrada;
    }
    $json[] = $grupo;
    // Base
    $grupo = new \stdClass();
    $grupo->id = "grupo5";
    $grupo->imagenes = [];
    foreach ($nodes as $key => $node) {
      $entrada = new \stdClass();
      $fid = $node->field_imagen_portada->getValue()[0]['target_id'];
      $file = File::load($fid);
      $entrada->imagen = file_create_url($file->getFileUri());
      $entrada->titulo = $node->label();
      $entrada->texto = $node->field_resumen_corto->getValue()[0]['value'];
      $entrada->enlace = \Drupal::service('path_alias.manager')->getAliasByPath('/node/'.$node->id());
      $grupo->imagenes[] = $entrada;
    }
    $json[] = $grupo;
    return json_encode($json);
  }
}
