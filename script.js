
// Recent Work

let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.work-item');
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth + 20; // 20px is the combined margin

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}


// Design Process


function playVideo(videoId) {
    var videoFrame = document.getElementById("videoFrame");
    var videoUrl = 'https://www.youtube.com/embed/';
  
    switch (videoId) {
      case 'WX7DBPcsiEs':
        videoUrl += 'WX7DBPcsiEs';
        break;
      case 'Kn60bRAxun8':
        videoUrl += 'Kn60bRAxun8';
        break;
      case 'KzclmnHJcvs':
        videoUrl += 'KzclmnHJcvs';
        break;
      case 'i6bI8MRkxBc':
        videoUrl += 'i6bI8MRkxBc';
        break;
      default:
        videoUrl += 'WX7DBPcsiEs'; 
    }
  
    videoFrame.src = videoUrl;
  }


//   FAQ

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', toggleAnswer);
    });

    document.querySelector('.add-question').addEventListener('click', addQuestion);
});

function toggleAnswer(event) {
    const button = event.currentTarget;
    const answer = button.nextElementSibling;

    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

function searchQuestions() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        if (question.includes(searchInput)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

document.getElementsByClassName("faq-question").addEventListener("click", function() {
    this.classList.toggle("active");
});


