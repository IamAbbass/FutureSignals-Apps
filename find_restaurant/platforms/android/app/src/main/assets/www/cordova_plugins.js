cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-advanced-geolocation.AdvancedGeolocation",
      "file": "plugins/cordova-plugin-advanced-geolocation/www/AdvancedGeolocation.js",
      "pluginId": "cordova-plugin-advanced-geolocation",
      "clobbers": [
        "AdvancedGeolocation"
      ]
    },
    {
      "id": "cordova-plugin-permission.Permission",
      "file": "plugins/cordova-plugin-permission/www/index.js",
      "pluginId": "cordova-plugin-permission",
      "clobbers": [
        "window.plugins.Permission"
      ]
    },
    {
      "id": "cordova-plugin-permission.tests",
      "file": "plugins/cordova-plugin-permission/tests/index.spec.js",
      "pluginId": "cordova-plugin-permission"
    },
    {
      "id": "cordova-plugin-geolocation-android-activator.geolocation-activator",
      "file": "plugins/cordova-plugin-geolocation-android-activator/www/geolocation-activator.js",
      "pluginId": "cordova-plugin-geolocation-android-activator",
      "clobbers": [
        "navigator.geolocation.activator"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-appminimize.AppMinimize",
      "file": "plugins/cordova-plugin-appminimize/www/AppMinimize.js",
      "pluginId": "cordova-plugin-appminimize",
      "clobbers": [
        "cordova.plugins.appMinimize"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-advanced-geolocation": "1.6.2",
    "cordova-plugin-permission": "0.1.0",
    "cordova-plugin-geolocation-android-activator": "1.1.2",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-appminimize": "1.0.1"
  };
});