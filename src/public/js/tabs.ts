function tabs() {
    document.querySelectorAll('.tabs-wrapper').forEach(tab => {
        const contents = tab.querySelectorAll('.tab-content');
        const items = tab.querySelectorAll('.tabs ul li');

        contents[0].classList.add('is-active');
        items[0].classList.add('is-active');

        items.forEach((item, index) => {
            item.addEventListener('click', () => {
                activateTab(index, items, contents);
            });
        });
    });

    function activateTab(index: number, items: NodeListOf<Element>, contents: NodeListOf<Element>) {
        contents.forEach((content: any) => content.classList.remove('is-active'));
        contents[index].classList.add('is-active');

        items.forEach((item: any) => item.classList.remove('is-active'));
        items[index].classList.add('is-active');
    }
};

export { tabs as default };