const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        name,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('content')

    let loading = '<p> loading... </p>'

    let ok = '<p> ok! </p>'

    content.innerHTML = loading


    setTimeout(() => {
        content.innerHTML = ok
    }, 1000)
    
})
