import { useState } from 'react';

// 定义 ModalState 接口
interface ModalState {
  isOpen: boolean; // 弹窗是否显示
  action: '新建' | '编辑'; // 弹窗是新建还是编辑状态
  setModalOpen: (isOpen: boolean, action?: '新建' | '编辑') => void; // 设置弹窗是否显示和状态
}

const useModalState = (): ModalState => {
  // 使用 useState 来管理弹窗状态和状态码
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState<ModalState['action']>('新建');

  // 定义 setModalOpen 方法
  const setModalOpen: ModalState['setModalOpen'] = (isOpen, action = '新建') => {
    setAction(action); // 设置 action 状态
    setIsOpen(isOpen); // 设置 isOpen 状态
  };

  // 返回 ModalState 对象
  return { isOpen, setModalOpen, action };
};

export default useModalState;
