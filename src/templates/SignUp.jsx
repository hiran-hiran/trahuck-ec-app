import React, { useState, useCallback } from 'react'
import { TextInput, PrimaryButton } from "../components/UIkit"
import { signUp } from '../reducks/users/operations';

import { useDispatch } from "react-redux"



const SignUp = () => {
  const dispatch = useDispatch()

  const [userName, setUserName] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState("");

  const inputUserName = useCallback((e) => {
    setUserName(e.target.value)
  }, [setUserName])

  const inputEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [setEmail])

  const inputPassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [setPassword])

  const inputConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value)
  }, [setConfirmPassword])


  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">アカウント登録</h2>
      <div className="module-spacer--medium" />
      <TextInput fullWidth={true} label={"ユーザー名"} multiline={false} required={true} rows={1} value={userName} type={"text"} onChange={inputUserName} />

      <TextInput fullWidth={true} label={"メールアドレス"} multiline={false} required={true} rows={1} value={email} type={"email"} onChange={inputEmail} />

      <TextInput fullWidth={true} label={"パスワード"} multiline={false} required={true} rows={1} value={password} type={"password"} onChange={inputPassword} />

      <TextInput fullWidth={true} label={"パスワード（再確認用）"} multiline={false} required={true} rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword} />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton
          label={"アカウントを登録する"}
          onClick={() => dispatch(signUp(userName, email, password, confirmPassword))}
        />
      </div>
    </div>
  )
}

export default SignUp
