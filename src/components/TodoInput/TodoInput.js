import React from 'react'
import styles from './TodoInput.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

/**
 * @param value input 값
 * @param onChange input 변경 이벤트
 * @param onInsert 추가 버튼 클릭 이벤트
 */
const TodoInput = ({ value, onChange, onInsert }) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onInsert()
    }
  }
}
