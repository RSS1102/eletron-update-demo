
import { Modal } from "antd"
import { ipcRenderer } from "electron"
import { useEffect, useState } from "react"
const Update=()=>{
  const [isModalOpen, setisModalOpen]=useState(false)
  const [progress, setProgress] = useState(null)

  ipcRenderer.on('need-update', (e, data) => {
    console.log("data", data);
  })
  ipcRenderer.on('download-progress-data', (arr, arg) =>{
    setProgress(arg.percent)
  })

  const handleOk = () => {
    ipcRenderer.send('start-download', true)
  }
  const handleCancel = () => setisModalOpen(false)
  
  return(
    <>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        进度:{progress}
      </Modal>
    </>
  )

}

export default Update