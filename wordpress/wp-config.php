<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'B$k?=9w(B`CN35n`^nr9Kb%VhhCqhk@9f.$fI;u*p,*OcZ`3U`LU$DUfk=(P(x]M' );
define( 'SECURE_AUTH_KEY',  '!A_!HjYCA<H_fqkE1vdRlXy_P 6=lp#1YhXbjd}XZFOj8*N}&xV{LORPjYv.m+f#' );
define( 'LOGGED_IN_KEY',    'QcIi[@w9mbD/&$GfXhId5b4&9OR!E~ajJQ[w8rGf0(3A:HFmBDS|ENr(_a_`k1$!' );
define( 'NONCE_KEY',        '<v)55G>f.&8s;D9;:{8AkU}^^^!QwE~<fpR?$nB]KhyVdGsV&g<mU{o8r-SK]7a#' );
define( 'AUTH_SALT',        '?w@+;^p=?9^zp@ x{//c`reXNU?$ZRtb}v.~ep6Z8bmr)BfccRp$v.<m-oKL5e}{' );
define( 'SECURE_AUTH_SALT', 'JpOSd*@8&gB(1#ig%@A{5%~XaKuDjpscGY+?q*?9*9bh7q[,6BSFI5cAM%8cRnEM' );
define( 'LOGGED_IN_SALT',   '|of.;D+^!|1mShT2.(Ja|koT?Wuoy{>:B!rCD&P!^%PHz/2~uTULrLR[{F}>t9n]' );
define( 'NONCE_SALT',       'v[Fw]s I%cu=3l{URL%ukDbf5Yq@DnDv4`(xBbZ|M}p(|xXV+{cRA@qskO?_G-N%' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
