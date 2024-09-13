$(document).ready(function() {
    
    var isMuted = false;

    // Function to toggle audio
    function toggleAudio() {
        var audioElement = document.getElementById('background-music');

        if (isMuted) {
            audioElement.play();
            $('#audio-icon').removeClass('fa-volume-mute').addClass('fa-volume-up');
        } else {
            audioElement.pause();
            $('#audio-icon').removeClass('fa-volume-up').addClass('fa-volume-mute');
        }

        isMuted = !isMuted;
    }

    // Play audio automatically when page loads
    var audioElement = document.getElementById('background-music');
    audioElement.play().catch(function(error) {
        console.log('Audio play was prevented by the browser:', error);
    });

    // Toggle audio when button is clicked
    $('#toggle-audio').on('click', toggleAudio);

    // Handle the case where auto-play is prevented
    audioElement.addEventListener('ended', function() {
        // Automatically handle the end of audio if needed
    });

    $('.circle').on('click', function() {
        window.location.href = './portfolio/Portfolio.html';
    });
    var video = document.getElementById('videoBackground');
            // ตรวจสอบว่ามีตำแหน่งเก่าของวิดีโอใน localStorage หรือไม่
            if (localStorage.getItem('videoCurrentTime')) {
                video.currentTime = parseFloat(localStorage.getItem('videoCurrentTime'));
            }

            // บันทึกตำแหน่งของวิดีโอใน localStorage เมื่อหน้าเว็บถูกปิดหรือโหลดใหม่
            $(window).on('beforeunload', function() {
                localStorage.setItem('videoCurrentTime', video.currentTime);
            });
});
