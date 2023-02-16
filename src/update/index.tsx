
import { Modal, Progress } from "antd"
import { ipcRenderer } from "electron"
import { useState } from "react"
const Update = () => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [version, setVersion] = useState({
    newVersion: 0.00,
    oldVersion: 0.00
  })
  const [text, setText] = useState({
    okText: '更新',
    cancelText: '取消'
  })

  ipcRenderer.on('need-update', (e, arg) => {
    console.log(arg)
    setisModalOpen(arg.isUpdate)
    setVersion({
      oldVersion: arg.oldVersion ?? `null`,
      newVersion: arg.newVersion ?? `null`,
    })
  })
  ipcRenderer.on('download-progress-data', (arr, arg) => setProgress(arg.percent))
  ipcRenderer.on('update-downed', (arr, arg) => {
    setProgress(100)
    setText({
      okText: '立即安装',
      cancelText: '稍后安装'
    })
  })

  const handleOk = () => {
    if (progress < 100) {
      ipcRenderer.send('start-download', true)
    } else {
      console.log("安装")
      ipcRenderer.send("quit-and-install")

    }
  }
  const handleCancel = () => setisModalOpen(false)
  const progressFormat = (percent: number | undefined) => `${percent?.toFixed(2)}%`

  return (
    <>

      <Modal title="有可更新程序"
        open={isModalOpen} onOk={handleOk}
        okText={text.okText}
        cancelText={text.cancelText}
        onCancel={handleCancel}
        maskClosable={false}
        keyboard={false}>
        <div>当前版本:{version.oldVersion},可用最新版本: {version.newVersion}</div>
        进度:
        <Progress percent={progress} format={progressFormat} />
      </Modal>
    </>
  )

}

export default Update