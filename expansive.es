Expansive.load({
    transforms: {
        name:  'video',
        height: 390,
        width: 640,
        full: true,
        provider: 'youtube',

        script: `
            public function video(src, options = {}) {
                let service = expansive.services['video']
                let video = service.clone()
                blend(video, meta.video)
                blend(video, options)
                write('<div class="video">\n')
                write('    <iframe frameborder="" allowfullscreen="' +
                    (video.full ? '1' : '0') + '" ' +
                    'height="' + video.height + '" ' +
                    'width="' + video.width + '" ' +
                    'src="' + src + '"></iframe>\n')
                write('</div>\n')
            }
        `
    }
})
