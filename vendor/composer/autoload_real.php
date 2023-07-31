<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitcbe28a93bafe35d69a5a7e8dc7190ee2
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitcbe28a93bafe35d69a5a7e8dc7190ee2', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitcbe28a93bafe35d69a5a7e8dc7190ee2', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitcbe28a93bafe35d69a5a7e8dc7190ee2::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
