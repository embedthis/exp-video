Expansive.load({
    services: {
        name:       'video',
        width:      '100%',
        height:     '100%',
        full:       true,
        provider:   'wistia',

        init: function() {
            global.video = function(src, options = {}) {
                if (typeof src == 'string') {
                    options.src = src
                } else {
                    options = src
                }
                let video = blend({}, expansive.services.video)
                blend(video, meta.service.video)
                blend(video, options.provider)
                let provider = video.provider
                let height = options.height || video.height
                let width = options.width || video.width

                if (provider == 'youtube') {
                    write('<div class="video">\n')
                    write('    <iframe title="video" frameborder="" allowfullscreen="' +
                        (video.full ? '1' : '0') + '" ' +
                        'height="' + height + '" ' +
                        'width="' + width + '" ' +
                        'src="' + (options.mp4 || options.src) + '"></iframe>\n')
                    write('</div>\n')

                } else if (provider == 'vimeo') {
                    write('<iframe allowFullScreen webkitAllowFullScreen frameborder="0" mozallowfullscreen ')
                    if (options.height) {
                        write('height="' + options.height + '"')
                    }
                    if (options.width) {
                        write('width="' + options.width + '"')
                    }
                    write('src="' + options.src + '"')
                    write('</iframe>')

                } else if (provider == 'wistia') {
                    let height = options.height || '100%'
                    let width = options.width || '100%'
                    let styles = options.styles || ''
                    write('<div class="video-container ' + styles + '">')
                    write('<script src="' + options.src + '" async></script>')
                    write('<script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>')
                    write('<div class="wistia_responsive_padding" style="color: green;padding:56.25% 0 0 0;position:relative;">')
                    write('<div class="wistia_responsive_wrapper" style="height:' + height +
                        ';position:absolute;top:0;left:0;width:' + width + ';">')
                    write('<div class="wistia_embed wistia_async_4cttqu65jz videoFoam=true" style="height:100%;width:100%">&nbsp;</div>')
                    write('</div></div></div>')
                } else {
                    /* HTML5 */
                    /* height, width, preload=true, loop */
                    write('<video ')
                    if (options.style) {
                        write('style="' + options.style + '" ')
                    }
                    if (options.klass) {
                        write('class="' + options.klass + '" ')
                    }
                    if (options.controls) {
                        write('controls="' + options.controls + '" ')
                    }
                    if (height) {
                        write('height="' + height + '" ')
                    }
                    if (width) {
                        write('width="' + width + '" ')
                    }
                    if (options.preload) {
                        write('preload="' + options.preload + '" ')
                    }
                    if (options.image) {
                        write('poster="' + options.image + '" ')
                    }
                    write('>')
                    if (options.src) {
                        write('<source src="' + src + '" type="video/mp4">')
                    }
                    if (options.webm) {
                        write('<source src="' + options.webm + '" type="video/webm">')
                    }
                    if (options.mp4) {
                        write('<source src="' + options.mp4 + '" type="video/mp4">')
                    }
                    write('</video>')
                }
            }
        }
    }
})
