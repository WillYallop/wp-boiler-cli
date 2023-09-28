# WP Boiler CLI

The purpose of this CLI is to allow you to quickly create and update a WordPress project whilst keeping the core WordPress installation separate. This ensures it doesn't clutter and add unnecessary size to your repository.

## Getting Started

Run `npx wp-boiler` in the root of your project. This will create a `public_html` directory which, by default, installs the latest version of WordPress. The themes, plugins, and uploads directories will be deleted. Subsequently, symlinks will be created with their targets located in the `./wordpress` directory. The `wp-config.php` file will also be generated, symlinked, and populated with sample content.

Subsequent runs of `wp-boiler` will reinstall and initialise the symlinks. However, if the target files already exist, they will remain untouched. This allows you to upgrade the core WordPress installation without affecting your work.

## Config

You can specify the WordPress version you wish to use by creating a `wp-boiler.config.mjs` file in the root of your project. Here's an example. By default, the WordPress version is set to the latest.

```js
export default {
  wordpress: {
    version: "latest",
  },
};
```

> wp-boiler.config.mjs

## Example

Find an example project location in this repository at `./apps/example`.
