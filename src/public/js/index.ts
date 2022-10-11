function tabs() {
    document.querySelectorAll('.tabs-wrapper').forEach(tab => {
        const items = tab.querySelectorAll('.tabs ul li');
        const contents = tab.querySelectorAll('.tab-content');

        items[0].classList.add('is-active');
        contents[0].classList.add('is-active');

        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                activateTab(index, items, contents);
            });
        });
    });

    function activateTab(index: number, items: any, contents: any) {
        items.forEach((item: any) => item.classList.remove('is-active'));
        items[index].classList.add('is-active');
        
        contents.forEach((content: any) => content.classList.remove('is-active'));
        contents[index].classList.add('is-active');
    }
};

tabs();