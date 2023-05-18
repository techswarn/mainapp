import React, {useEffect, useState} from 'react'
import axios from "axios"

export default function Weather() {
    const [value, setValue] = useState(null);
//    const baseUrl = "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-0b0f94ea-326e-434f-a6db-e297bf02f150/users/createUser";
    const baseUrl = "https://faas-blr1-8177d592.doserverless.co/api/v1/namespaces/fn-0b0f94ea-326e-434f-a6db-e297bf02f150/actions/users/createUser?blocking=true&result=true"
    const addUser = async () => {
        try {
            const {data} = await axios.post(baseUrl, {name :value}, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Basic ODgzMjRkMGUtOTU3Mi00NjRhLTk4YTgtZTExYTM4YmU3YTQ1Om5nWXk5MnplZzFGelZLT2Y3d2tWMkdNRjUxb0wwMk82OWFBcVUyN0xTSm9jTkVXeURpNnpicW9aejZyV01GMzI='
                }
            })
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }

    const handleSubmit = (e) => {
        setValue(e.currentTarget.elements.usernameInput.value)
        addUser()
        e.preventDefault()
    }

    return (
        <div className="container">
            <h3 className="my-4">Add User</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="usernameInput">Username:</label>
                    <input id="usernameInput" type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
