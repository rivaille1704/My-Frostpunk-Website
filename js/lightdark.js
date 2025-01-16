try {
    function changeTheme(e) {
        const htmlTag = document.getElementsByTagName('html')[0];
        const isChecked = e.target.checked;

        if (isChecked) {
            htmlTag.className = 'dark';
        } else {
            htmlTag.className = 'light';
        }

        localStorage.setItem('theme', htmlTag.className);
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.getElementsByTagName('html')[0].className = savedTheme;
        if (savedTheme === 'dark') {
            document.getElementById('chk').checked = true;
        }
    }

    const chk = document.getElementById('chk');
    chk.addEventListener('change', changeTheme);
} catch (err) {
    console.error("Lỗi: ", err);
}
