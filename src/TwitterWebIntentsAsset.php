<?php
/**
 * @copyright Copyright (C) 2015-2018 AIZAWA Hina
 * @license https://github.com/fetus-hina/stat.ink/blob/master/LICENSE MIT
 * @author AIZAWA Hina <hina@bouhime.com>
 */

declare(strict_types=1);

namespace statink\yii2\twitter\webintents;

use yii\web\AssetBundle;

class TwitterWebIntentsAsset extends AssetBundle
{
    public $sourcePath = '@vendor/statink/yii2-twitter-webintents/assets';
    public $js = [
        'web-intents.min.js',
    ];
}
