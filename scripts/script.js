const onSourceCodeClick = () => {
    const downloadCode = confirm("Do you want to download the CreateC source code?");

    if (downloadCode){
        window.open("https://github.com/devpython88/CreateC/archive/refs/heads/main.zip");
    }
};