'use client'
import React, { useState } from 'react';
import { ChevronRight, Download, Search, ChevronLeft, FileX } from 'lucide-react';

const resourcesData = [
  { id: 1, title: '첨단 기술 트렌드와 관련된 최신 자료를 다운로드하세요', date: '2026-03-19' },
  { id: 2, title: '2026년 글로벌 해양 산업 전망 보고서', date: '2026-03-15' },
  { id: 3, title: '스마트 팩토리 도입 가이드라인 및 성공 사례', date: '2026-03-10' },
  { id: 4, title: 'AI 기반 자율운항 시스템 기술 백서', date: '2026-03-05' },
  { id: 5, title: '친환경 선박 에너지 효율 개선 사례집', date: '2026-02-28' },
  { id: 6, title: '차세대 복합소재 연구 개발 동향', date: '2026-02-20' },
  { id: 7, title: '해양 IoT 센서 네트워크 구축 매뉴얼', date: '2026-02-15' },
  { id: 8, title: '자율주행 선박 안전 기준 및 규제 동향', date: '2026-02-10' },
  { id: 9, title: '스마트 항만 물류 최적화 솔루션', date: '2026-02-05' },
  { id: 10, title: '해양 데이터 분석 및 활용 사례', date: '2026-01-30' },
  { id: 11, title: '친환경 에너지 추진 시스템 기술 동향', date: '2026-01-25' },
  { id: 12, title: '해양 방위 산업 기술 발전 방향', date: '2026-01-20' }
];


export function ResourceDownloadSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const element = document.getElementById('downloads');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredResources = resourcesData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const currentItems = filteredResources.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div id="downloads" className="w-full scroll-mt-24">
      <div className="w-full mx-auto">
        <div className="mx-auto">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-[#2d5bcb] uppercase mb-3">Resource Download</span>
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">자료 다운로드</h3>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-80 flex items-center bg-white border border-slate-200 rounded-xl overflow-hidden focus-within:border-[#2d5bcb] focus-within:ring-1 focus-within:ring-[#2d5bcb] transition-all">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="flex-1 h-10 px-4 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none"
              />
              <button className="h-10 w-10 flex items-center justify-center text-slate-400 hover:text-[#2d5bcb] transition-colors shrink-0 cursor-pointer">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* List */}
          <div className="flex flex-col gap-2 mb-8">
            {filteredResources.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-slate-400 bg-white rounded-xl border border-slate-200">
                <FileX className="w-10 h-10 mb-3 text-slate-400" />
                <p className="text-sm font-medium text-slate-700 mb-1">검색 결과가 없습니다</p>
                <p className="text-sm text-slate-500">다른 검색어를 입력해 보세요.</p>
              </div>
            ) : (
              currentItems.map((item) => (
                <div key={item.id} className="bg-white border border-slate-200 rounded-xl px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-blue-300 hover:shadow-sm transition-all">
                  <div>
                    <h3 className="text-base font-medium text-slate-900 mb-1 leading-snug">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-[#2d5bcb] hover:text-[#2d5bcb] transition-colors cursor-pointer">
                      <Download className="w-3.5 h-3.5" />
                      다운로드
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-slate-900 cursor-pointer'
                  }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors font-medium cursor-pointer ${currentPage === page
                    ? 'bg-[#2d5bcb] text-white shadow-sm'
                    : 'text-slate-500 hover:bg-slate-100'
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 flex items-center justify-center transition-colors ${currentPage === totalPages ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-slate-900 cursor-pointer'
                  }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
