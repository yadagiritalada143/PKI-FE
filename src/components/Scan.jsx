import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { uploadAndScanFiles } from "./utils/axiosInstance";

const Scan = () => {
    const [file, setFile] = useState(null);

    const [isFileSelected, setIsFileSelected] = useState(false);

    const selectFile = async (event) => {
        setIsFileSelected(true);
        setFile(event.target);
    }

    const uploadFile = async () => {
        const data = await uploadAndScanFiles(file.files[0], file.value);
        console.log(data);
    }

    return <>
        <input type="file" onChange={selectFile} />
        <button className="btn btn-primary mt-3" onClick={uploadFile} disabled={!isFileSelected}>Upload</button>
    </>
}

export default Scan;