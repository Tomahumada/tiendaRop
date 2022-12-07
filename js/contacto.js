const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(e){
    e.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })    
    if(response.ok){
        this.reset()
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question'
        )
    }
}
