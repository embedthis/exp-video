exp-video
===

Expansive Video

Provides the following services:

* video

### To install:

    pak install exp-video

### Description

This simple plugin provides the **video()** partial function to render inline YouTube videos.

### Configure

#### Meta Data

* video.height &mdash; Set the video frame height in pixels.
* video.width &mdash; Set the video frame width in pixels.
* video.full &mdash; Permit the video to go full screen.

#### Service Data

* video.enable &mdash; Enable the video service.
* video.provider &mdash; Select the video provider. Currently only supports **youtube**.


```
{
    meta:
        video: {
            height: 640,
            width: 360,
            full: true
        }
    },
    services: {
        video: {
            enable: true,
            provider: 'youtube'
        }
    }
}
```

### Get Pak from

[https://www.embedthis.com/pak/](https://www.embedthis.com/pak/)
