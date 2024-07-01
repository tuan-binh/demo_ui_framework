// import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Modal } from 'antd';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mt-[50px]">
      {/* <h1 className="bg-[#bc2228] text-white p-5">
        Xin chào các bạn, thầy là Chần Pình, hãy like và chia sẻ cho thầy nhé
      </h1> */}
      <Button variant="contained" onClick={showModal}>
        TEST
      </Button>
      <TextField
        sx={{ color: 'blue' }}
        // error={true}
        id="outlined-basic"
        size="small"
        label="Không được để trống"
        variant="outlined"
      />
      <Avatar alt="Remy Sharp" sx={{ borderRadius: '2px' }} src="/static/images/avatar/1.jpg" />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={null}
        cancelText="Đóng đê"
        footer={null}
      ></Modal>
      <h1>Nguyễn Văn Liêm</h1>
      <h1>Trần Quang Đạo</h1>
      <h1>Nguyễn Trường Giang</h1>
      <h1>Ngô Đăng Anh Tôn</h1>
    </div>
  );
}

export default App;
