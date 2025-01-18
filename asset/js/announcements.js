document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('announcementForm');
      const announcementsList = document.getElementById('announcementsList');
  
      // Load existing announcements from localStorage
      loadAnnouncements();
  
      form.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const title = document.getElementById('announcementTitle').value;
          const content = document.getElementById('announcementContent').value;
          const imageUrl = document.getElementById('announcementImage').value;
          
          if (title && content) {
              addAnnouncement(title, content, imageUrl);
              form.reset();
          }
      });
  
      function addAnnouncement(title, content, imageUrl) {
          const announcement = {
              id: Date.now(),
              title: title,
              content: content,
              imageUrl: imageUrl,
              date: new Date().toLocaleString()
          };
  
          // Add to localStorage
          let announcements = JSON.parse(localStorage.getItem('announcements')) || [];
          announcements.unshift(announcement);
          localStorage.setItem('announcements', JSON.stringify(announcements));
  
          // Add to DOM
          displayAnnouncement(announcement);
      }
  
      function displayAnnouncement(announcement) {
          const li = document.createElement('li');
          li.className = 'announcement-item';
          li.innerHTML = `
              <h4 class = 'text-center mb-1'>${announcement.title}</h4>
              ${announcement.imageUrl ? `<img src="${announcement.imageUrl}" class ='text-center' alt="${announcement.title}" style="max-width: 100%; height: auto; ">` : ''}
              <p class = 'leader' >${announcement.content}</p>
              <small class = 'd-block text-center mt-1'>${announcement.date}</small>
          `;
          announcementsList.insertBefore(li, announcementsList.firstChild);
      }
  
      function loadAnnouncements() {
          const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
          announcements.forEach(displayAnnouncement);
      }
  });