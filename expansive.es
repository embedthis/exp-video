Expansive.load({
    services: {
        name:       'video',
        height:     390,
        width:      640,
        full:       true,
        provider:   'youtube',

        init: function() {
            global.video = function(src, options = {}) {
                let video = meta.service
                write('<div class="video">\n')
                write('    <iframe title="video" frameborder="" allowfullscreen="' +
                    (video.full ? '1' : '0') + '" ' +
                    'height="' + video.height + '" ' +
                    'width="' + video.width + '" ' +
                    'src="' + src + '"></iframe>\n')
                write('</div>\n')
            }
        }
    }
})
