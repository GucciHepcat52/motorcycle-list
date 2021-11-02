console.log('hello world')

const name = document.getElementById('name')
const year = document.getElementById('year')
const color = document.getElementById('color')
const motorcycleForm = document.querySelector('form')

function addMotorcycle(event){
    event.preventDefault()

    let body = {
        name: name.value,
        year: year.value,
        color: color.value
    }

    axios.post('https://motorcycle-list.herokuapp.com/motorcycle', body)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
}

motorcycleForm.addEventListener('submit', addMotorcycle)