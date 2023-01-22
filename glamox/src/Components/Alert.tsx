

export default function Alert(prop:any):any {
        const {title,description,status}=prop
        //console.log(title)
        return {
                title: title,
                description: description,
                status: status,
                duration: 2000,
                isClosable: true,
                position:'top'
              }
}
     
        