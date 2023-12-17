import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('RoutineManager and Calendar Integration Tests', () => {
  // 루틴 관리자 초기 UI 요소 테스트
  test('RoutineManager renders with initial UI elements', () => {
    render(<App />);
    expect(screen.getByText('Weekly 루틴 관리')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('새 루틴 이름')).toBeInTheDocument();
    expect(screen.getByText('루틴 추가')).toBeInTheDocument();
  });

  // 새 루틴 추가 기능 테스트
  test('Can add a new routine and it appears in the calendar', () => {
    render(<App />);

    // 새 루틴 이름 입력
    fireEvent.change(screen.getByPlaceholderText('새 루틴 이름'), { target: { value: 'New Routine' } });

    // "루틴 추가" 버튼 클릭
    fireEvent.click(screen.getByText('루틴 추가'));

    // 새 루틴이 캘린더에 표시되었는지 확인
    expect(screen.getByText('New Routine')).toBeInTheDocument();
  });

  // 주간 탐색 기능 테스트
  test('Can navigate weeks in the calendar', () => {
    render(<App />);

    // 초기 주간 타이틀 저장
    const initialWeekTitle = screen.getByTestId('week-title').textContent;

    // 다음 주로 이동
    fireEvent.click(screen.getByText('>'));
    const nextWeekTitle = screen.getByTestId('week-title').textContent;
    expect(nextWeekTitle).not.toBe(initialWeekTitle);

    // 이전 주로 이동
    fireEvent.click(screen.getByText('<'));
    const previousWeekTitle = screen.getByTestId('week-title').textContent;
    expect(previousWeekTitle).toBe(initialWeekTitle);
  });

  // 루틴 상태 변경 테스트
  test('Can change the status of a routine', () => {
    render(<App />);
    
    // 새 루틴 추가
    fireEvent.change(screen.getByPlaceholderText('새 루틴 이름'), { target: { value: 'Gym' } });
    fireEvent.click(screen.getByText('루틴 추가'));

    // 상태 변경을 위한 드롭다운 선택
    fireEvent.change(screen.getByTestId('routine-status'), { target: { value: 'o' } });
    expect(screen.getByTestId('routine-status').value).toBe('o');
  });
});
