import React, { useState, useEffect } from "react";
import Result from "./Result"; // Result 컴포넌트 임포트
import Loading from "./Loading"; // Loading 컴포넌트 임포트

export default function ResultWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3초 후 로딩 상태 변경
    const timer = setTimeout(() => {
      setLoading(false); // 로딩 종료
    }, 3000);

    return () => clearTimeout(timer); // 타이머 정리
  }, []);

  return (
    <>
      {loading ? <Loading /> : <Result />} {/* 로딩 중이면 Loading, 아니면 Result */}
    </>
  );
}
