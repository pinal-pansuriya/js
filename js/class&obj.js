// class -> tempalte

class railwayform{
    submit(){
        alert(this.name + " your form submitted")
    }
    cancel(){
        alert(this.name + " this form is cancelled")
    }
    fill(givenname){
        this.name=givenname
    }
}

let pinalform = new railwayform()
pinalform.fill("pinal")
let pranjalform = new railwayform()
pranjalform.fill("pranjal")

pinalform.submit()
pranjalform.submit()
pranjalform.cancel()