<?php

namespace Drupal\cev_rest;
use Drupal\serialization\Normalizer\NormalizerBase;

/**
 * StdClass normalizer.
 */
class NormalizerStdClass extends NormalizerBase {

  /**
   * Constructs a NormalizerStdClass object.
   *
   * @param string|array $supported_class
   *   The supported class(es).
   */
  public function __construct($supported_class) {
    $this->supportedInterfaceOrClass = $supported_class;
  }

  /**
   * {@inheritdoc}
   */
  public function normalize($object, $format = NULL, array $context = []) {
    return new \stdClass();
  }

}
