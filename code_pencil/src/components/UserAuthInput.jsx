import { useState } from 'react'

const UserAuthInput = ({ label, placeHolder, isPass, setStateFunction, icon, setGetEmailValidationStatus }) => {
    const [value, setvalue] = useState("");
    const [showPass, setShowPass] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(false)
    
    const handleTextChange = (e)=>{
        setvalue(e.target.value)
        setStateFunction(e.target.value);

        if(placeHolder === "Email"){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const status = emailRegex.test(value)
            setIsEmailValid(status);
            setGetEmailValidationStatus(status);
        }
    };
    return (
        <div className='flex flex-col items-start justify-start gap-1 w-full '>
            <label className='text-sm text-gray-300'>{label}</label>
            <div className={`flex items-center justify-center gap-3 w-64 md:w-96 rounded-md px-4 bg-gray-300 ${!isEmailValid && placeHolder === "Email" && value.length>0 && "border-2 border-red-500"}`}>
                <p className='bg-gray-600 rounded-md px-1 underline text-white'>{icon}</p>
                <input type={isPass && showPass ? "password" : "text"} className='flex-1 w-full h-full py-2 outline-none border-none bg-transparent placeholder:text-gray-600 text-lg' placeholder={placeHolder} value={value} onChange={handleTextChange} />
                {isPass &&
                    <div onClick={() => setShowPass(!showPass)} className='cursor-pointer'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEvElEQVR4nO1YbWgcRRjeav3jL0G9eWcvl5gmbdKm0R8FUczN3OXyUVON/TqtYsVvVISmYpsomBwaY2oMsWpqK+Y2jSZ7QRoQ1FqkSluwtBUF/WH2wC+qIvhDRKmKja/MxtzO7u3d7TW5XMB7YCDcvh/PM/PO5J1RlBJKKKGEJQuAIAPKJwH4D0DZeaAc5zMIsF8A2I1yDh9lTxLgf9lt2XkzJ/AEpbzhAqivu4RQvn++hF1FUPaWbZIo/9GDzz5F4cs90y8Yec8rwF1E8OF8ysZyBqYDNKxRFOUiZdEQvZiQcJ0oIZmLp3KyOQHTF4VvFph70OIzkdvB3LAph9VKkUHESlgl+H1OB/m0EUspf0PEZZpu3K3pydNx3TinJZJY6DEyMW2VkMpnBIccAqyac5KPJ4yxxSCtOYbMSdOTo1lFZBIwqhsPFoO85hQgftOT9+UtIJ4wPl0qAuK68UneAjTd+HMuYGf3IVxVewuuqt2IXT1TrkkXykZzE5Aw/shfgBRQJJyzqVm9yTXpQtlobiWUSOL/W0BXz5SZXCR9Iua+9AtloxVCQLE3sVYSkFjSK8BcWwmvyUbGpzHWfxh37BrD+x8eNkdH5zg+veeI2RbMp5VQ/WEPAmzNnNlGexLQN/QhtrV3YWVVW8aevnrlzdi++SkceOWEZwH9Qx+l/MWG9yCA6ZYAnsglYHjkM1y/YTdSNez5YuMva8SN0RgeOPhFVvJx3cCm9Y+l/Fo37MotgFIWdCScFC2t2/LH+t+zneVzY83aLaaorbf34pZtvdja9rirXf01t5kz7FY24neZvBgiX04BAuIO6kymloVx2/b+VICu7kMYKG+WWt0QRlp3Yu/ABxlnM/bcYQyGHrHFraxqs/mIHCKXM/+maMyKla2VmAVfLu6gziDlFc1mgO5n30F/IGKrbec/IkF44OUTZr2Lv+VvHbvfxIrKVkvEijZ8/qXj5jeRw428OBykGGdyCJgrp9ANYk8QYGepGvpbzM7eA6dwRbW1Uevqt+Lg8Mc2gkJgXX00ZbO2/lbs6XvXvukHj2LVypukOFHcP/q5uQJickTJiTKUyyZVYonkPUq+mL2NTY828IesU6GmHYdePWkLvmfvMSwLNKVv3EAkrd77Bo9i+VUtKRuxsXOeTLoRz3krywS/P3yXdSaHXGensXlHxtMn0tKRZt/ROS7tozDG+tJjiutrXDdOjkwm77xg8s4XC0LZM642lH+d5Qj9ys2HAJ+S4u5TCgVHIlcBhPLTWQSccvMB4NutuPxYwQT4KLtDIjPjfGUToJQ/kEkAocG0u6yqhmvMFztLwAsFEyBe5wjwIxKpX30+fp3DZhkAfz2NPLDXxDfZ8MoyXk0o+9ayY9+oauTyQgoQM3wFAf6dlPQ3ALbZaUdIsJFQNmAOwsLpcYItBNjPchyfv+FqZTEgXuyAsp/kchKEvPj+N+tvAOX/SOR/96m8SVlMzNYuN6TafdRpQ+m6SynlteaDMfCdBNj75t6xl9ZZQoLXKsVARQW/DIC/SIANCbJpJQT8XNbOFNgEIdf7lKUIQvlgBuIzAPxt0fUqSxmidAhlZwiwLwnw44SyMaKye1U1GCg2txJKKKEEZcHwL/ZSBBgVxfKGAAAAAElFTkSuQmCC" height='20' width='20' /></div>}
            </div>
        </div>
    )
}

export default UserAuthInput