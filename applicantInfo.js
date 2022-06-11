
var form = document.querySelector('form')

fetch('./applicantInfo.json')
.then(function(res) {
    return res.json()
})
.then(function(data) {
    data.map(createDiv)
})
.catch(function(err) {
    console.log(err)
})

function createDiv(obj) {
    if(obj['type'] == 'text'){
        const divTxt = `
        <div class="form-group col-md-4">
            <label for="${obj.name}">${obj.labels[0]}</label>
            <input type="text" class="form-control" id="${obj.id}"  placeholder="${obj.labels[0]}">
        </div>
        `;
         form.insertAdjacentHTML('beforeend',divTxt)
    }
}