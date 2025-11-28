fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('notes-container');

    data[0].subjects[0].chapters.forEach(chapter => {
      const chapterDiv = document.createElement('div');
      chapterDiv.classList.add('chapter');

      const title = document.createElement('h2');
      title.textContent = chapter.name;
      chapterDiv.appendChild(title);

      chapter.lectures.forEach(lec => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
          <p class="lecture-title">${lec.title}</p>
          <div class="actions">
            <a class="btn open" href="${lec.pdf}" target="_blank">📖 Open</a>
            <a class="btn download" href="${lec.pdf}" download>⬇ Download</a>
          </div>
        `;
        chapterDiv.appendChild(card);
      });

      container.appendChild(chapterDiv);
    });
  });
