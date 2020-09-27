
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-firebasex.FirebasePlugin",
          "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
          "pluginId": "cordova-plugin-firebasex",
        "clobbers": [
          "FirebasePlugin"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-cocoapod-support": "1.6.2",
      "cordova-plugin-firebasex": "9.1.2-cli",
      "cordova-plugin-device": "2.0.2"
    };
    // BOTTOM OF METADATA
    });
    