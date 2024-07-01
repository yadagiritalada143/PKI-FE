import { useEffect, useState } from "react";
import { getUserDetails, updateUserDetails } from "./utils/axiosInstance";
import { toast } from "react-toastify";

const Account = () => {

    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => { return { ...prev, [name]: value } });
    }

    const getAndUpdateDetails = async () => {
        const data = await getUserDetails();
        console.log(data.data);
        setFormData(data.data.user);
        setFormData((prev) => { return { ...prev, ['password']: '' } });
    }

    useEffect(() => {
        getAndUpdateDetails();
    }, [])

    const updateUser = async () => {
        try {
            await updateUserDetails(formData);
            toast("Updated details successfully");
        } catch (error) {
            toast.error(error.response.data.error);
        }

    }
    return <>
        <form className="">
            <div className="form-group d-flex align-items-center">
                <label for="exampleFormControlInput1" className="col-3">First Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="firstName" onChange={handleChange} value={formData.firstName} />
            </div>
            <div className="form-group d-flex align-items-center">
                <label for="exampleFormControlInput1" className="col-3">Last Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="lastName" onChange={handleChange} value={formData.lastName} />
            </div>
            <div className="form-group d-flex align-items-center">
                <label for="exampleFormControlInput1" className="col-3">Username</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="userName" onChange={handleChange} value={formData.userName} />
            </div>
            <div className="form-group d-flex align-items-center">
                <label for="exampleFormControlInput1" className="col-3">Password</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="******" name="password" onChange={handleChange} value={formData.password} required />
            </div>
            <div className="form-group d-flex align-items-center">
                <label for="exampleFormControlInput1" className="col-3">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={formData.email} disabled="true" />
            </div>
            <div className="form-group d-flex align-items-center">
                <label for="exampleFormControlInput1" className="col-3">Mobile Number</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="mobileNumber" onChange={handleChange} value={formData.mobileNumber} />
            </div>
        </form>

        <div className="d-flex justify-content-between">
            <div></div>
            <button type="button" className="btn btn-primary mt-3" onClick={updateUser}>Update</button>
        </div>

    </>
}

export default Account;