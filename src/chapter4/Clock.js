function Clock() {
  return (
    <div>
      <h1>현재 시각</h1>
      {/* 현재 지역의 시간을 나타내는 내장함수 */}
      <h2>
        오늘 날짜는 {new Date().toLocaleDateString()}
        <br />
        현재 시간은 {new Date().toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default Clock;
