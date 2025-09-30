import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Circle, Clock, AlertCircle } from 'lucide-react';

const MyShopRoadmap = () => {
  const [expandedPhases, setExpandedPhases] = useState({});
  const [completedTasks, setCompletedTasks] = useState({});
  const [selectedView, setSelectedView] = useState('gantt');

  const roadmapData = {
    phases: [
      {
        id: 'phase1',
        name: 'Phase 1: Thiết Lập Nền Tảng',
        duration: '2 tuần',
        weeks: [1, 2],
        color: 'bg-blue-500',
        tasks: [
          {
            id: 'p1w1',
            week: 1,
            name: 'Setup & Architecture',
            priority: 'critical',
            dependencies: [],
            subtasks: [
              { id: 'p1w1t1', name: 'Setup Solution Structure (Client, Server, Shared, Data)', hours: 4 },
              { id: 'p1w1t2', name: 'Git repository + branching strategy', hours: 2 },
              { id: 'p1w1t3', name: 'Database schema design', hours: 8 },
              { id: 'p1w1t4', name: 'PostgreSQL setup + Docker', hours: 3 },
              { id: 'p1w1t5', name: 'EF Core migrations + seed data', hours: 6 },
              { id: 'p1w1t6', name: 'Repository Pattern implementation', hours: 6 },
              { id: 'p1w1t7', name: 'DI Container setup', hours: 4 },
              { id: 'p1w1t8', name: 'Base classes (ViewModel, Service, Repository)', hours: 5 },
              { id: 'p1w1t9', name: 'Logging framework (Serilog)', hours: 2 }
            ]
          },
          {
            id: 'p1w2',
            week: 2,
            name: 'Authentication & UI Foundation',
            priority: 'critical',
            dependencies: ['p1w1'],
            subtasks: [
              { id: 'p1w2t1', name: 'JWT authentication implementation', hours: 8 },
              { id: 'p1w2t2', name: 'Password hashing (BCrypt)', hours: 3 },
              { id: 'p1w2t3', name: 'Token management + refresh logic', hours: 5 },
              { id: 'p1w2t4', name: 'Auto-login functionality', hours: 3 },
              { id: 'p1w2t5', name: 'Server configuration screen', hours: 4 },
              { id: 'p1w2t6', name: 'Encrypted credential storage', hours: 4 },
              { id: 'p1w2t7', name: 'Main window layout + navigation', hours: 6 },
              { id: 'p1w2t8', name: 'Theme & styling setup', hours: 5 },
              { id: 'p1w2t9', name: 'Loading states + error handling UI', hours: 4 }
            ]
          }
        ]
      },
      {
        id: 'phase2',
        name: 'Phase 2: Core Features',
        duration: '6 tuần',
        weeks: [3, 4, 5, 6, 7, 8],
        color: 'bg-green-500',
        tasks: [
          {
            id: 'p2w34',
            week: '3-4',
            name: 'Products Management (1.25đ)',
            priority: 'high',
            dependencies: ['p1w2'],
            subtasks: [
              { id: 'p2w34t1', name: 'Category CRUD + UI', hours: 6 },
              { id: 'p2w34t2', name: 'Product CRUD with pagination', hours: 10 },
              { id: 'p2w34t3', name: 'Product detail view + multiple images', hours: 8 },
              { id: 'p2w34t4', name: 'Search by name implementation', hours: 4 },
              { id: 'p2w34t5', name: 'Filter by price range', hours: 4 },
              { id: 'p2w34t6', name: 'Multi-criteria sorting', hours: 5 },
              { id: 'p2w34t7', name: 'Excel/Access import (EPPlus)', hours: 10 },
              { id: 'p2w34t8', name: 'Product grid/list responsive UI', hours: 8 },
              { id: 'p2w34t9', name: 'Bulk operations support', hours: 6 }
            ]
          },
          {
            id: 'p2w56',
            week: '5-6',
            name: 'Orders Management (1.5đ)',
            priority: 'high',
            dependencies: ['p2w34'],
            subtasks: [
              { id: 'p2w56t1', name: 'Product selection interface', hours: 6 },
              { id: 'p2w56t2', name: 'Cart functionality', hours: 8 },
              { id: 'p2w56t3', name: 'Order calculation (tax, total)', hours: 5 },
              { id: 'p2w56t4', name: 'Order list with pagination', hours: 6 },
              { id: 'p2w56t5', name: 'Order detail view', hours: 5 },
              { id: 'p2w56t6', name: 'Order status workflow', hours: 6 },
              { id: 'p2w56t7', name: 'Order search by date range', hours: 5 },
              { id: 'p2w56t8', name: 'Edit/Delete with validation', hours: 6 },
              { id: 'p2w56t9', name: 'Order history tracking', hours: 4 },
              { id: 'p2w56t10', name: 'Print/PDF export (iTextSharp)', hours: 8 }
            ]
          },
          {
            id: 'p2w7',
            week: 7,
            name: 'Dashboard Development (0.5đ)',
            priority: 'medium',
            dependencies: ['p2w56'],
            subtasks: [
              { id: 'p2w7t1', name: 'Total products count widget', hours: 2 },
              { id: 'p2w7t2', name: 'Top 5 low stock products', hours: 3 },
              { id: 'p2w7t3', name: 'Top 5 best-selling products', hours: 4 },
              { id: 'p2w7t4', name: 'Daily orders + revenue stats', hours: 4 },
              { id: 'p2w7t5', name: '3 recent orders display', hours: 3 },
              { id: 'p2w7t6', name: 'Real-time updates', hours: 5 },
              { id: 'p2w7t7', name: 'Daily revenue chart (LiveCharts)', hours: 8 },
              { id: 'p2w7t8', name: 'Interactive filtering', hours: 4 },
              { id: 'p2w7t9', name: 'Quick action buttons', hours: 3 }
            ]
          },
          {
            id: 'p2w8',
            week: 8,
            name: 'Reports System (1đ)',
            priority: 'high',
            dependencies: ['p2w7'],
            subtasks: [
              { id: 'p2w8t1', name: 'Product sales report by date', hours: 6 },
              { id: 'p2w8t2', name: 'Line charts for trends', hours: 6 },
              { id: 'p2w8t3', name: 'Revenue by day/week/month/year', hours: 8 },
              { id: 'p2w8t4', name: 'Profit analysis', hours: 5 },
              { id: 'p2w8t5', name: 'Bar + Pie charts', hours: 6 },
              { id: 'p2w8t6', name: 'Comparative analysis', hours: 5 },
              { id: 'p2w8t7', name: 'Export to Excel/PDF', hours: 6 },
              { id: 'p2w8t8', name: 'Custom date ranges', hours: 4 },
              { id: 'p2w8t9', name: 'Report templates', hours: 4 }
            ]
          }
        ]
      },
      {
        id: 'phase3',
        name: 'Phase 3: Advanced Features',
        duration: '4 tuần',
        weeks: [9, 10, 11, 12],
        color: 'bg-purple-500',
        tasks: [
          {
            id: 'p3w910',
            week: '9-10',
            name: 'Priority Features (3đ)',
            priority: 'high',
            dependencies: ['p2w8'],
            subtasks: [
              { id: 'p3w910t1', name: 'Plugin interface contracts', hours: 8 },
              { id: 'p3w910t2', name: 'Plugin discovery + loading', hours: 10 },
              { id: 'p3w910t3', name: 'Plugin management UI', hours: 6 },
              { id: 'p3w910t4', name: 'Sample plugins (export, reports)', hours: 8 },
              { id: 'p3w910t5', name: 'Discount system (%, fixed)', hours: 8 },
              { id: 'p3w910t6', name: 'Product/Category promotions', hours: 6 },
              { id: 'p3w910t7', name: 'Discount validation', hours: 5 },
              { id: 'p3w910t8', name: 'MVVM refactoring', hours: 12 },
              { id: 'p3w910t9', name: 'ViewModelBase + INotifyPropertyChanged', hours: 6 },
              { id: 'p3w910t10', name: 'Command pattern', hours: 6 },
              { id: 'p3w910t11', name: 'DI integration throughout', hours: 8 }
            ]
          },
          {
            id: 'p3w11',
            week: 11,
            name: 'Additional Features (1.5đ)',
            priority: 'medium',
            dependencies: ['p3w910'],
            subtasks: [
              { id: 'p3w11t1', name: 'Auto-save for orders', hours: 5 },
              { id: 'p3w11t2', name: 'Auto-save for products', hours: 4 },
              { id: 'p3w11t3', name: 'Background save operations', hours: 4 },
              { id: 'p3w11t4', name: 'Adaptive UI layouts', hours: 8 },
              { id: 'p3w11t5', name: 'Window resizing handling', hours: 6 },
              { id: 'p3w11t6', name: 'Customer database + CRUD', hours: 8 },
              { id: 'p3w11t7', name: 'Customer order history', hours: 5 },
              { id: 'p3w11t8', name: 'Database backup functionality', hours: 6 },
              { id: 'p3w11t9', name: 'Automated backup scheduling', hours: 4 },
              { id: 'p3w11t10', name: 'Restore with validation', hours: 4 }
            ]
          },
          {
            id: 'p3w12',
            week: 12,
            name: 'Polish & Final Features (0.5đ)',
            priority: 'medium',
            dependencies: ['p3w11'],
            subtasks: [
              { id: 'p3w12t1', name: 'Code obfuscation setup (ConfuserEx)', hours: 4 },
              { id: 'p3w12t2', name: 'Production build config', hours: 3 },
              { id: 'p3w12t3', name: 'Security hardening', hours: 4 },
              { id: 'p3w12t4', name: '15-day trial implementation', hours: 6 },
              { id: 'p3w12t5', name: 'License key validation', hours: 5 },
              { id: 'p3w12t6', name: 'Trial expiration handling', hours: 3 }
            ]
          }
        ]
      },
      {
        id: 'phase4',
        name: 'Phase 4: Deployment & QA',
        duration: '2 tuần',
        weeks: [13, 14],
        color: 'bg-orange-500',
        tasks: [
          {
            id: 'p4w13',
            week: 13,
            name: 'Installation & Testing',
            priority: 'critical',
            dependencies: ['p3w12'],
            subtasks: [
              { id: 'p4w13t1', name: 'WiX installer creation', hours: 8 },
              { id: 'p4w13t2', name: 'Database installation scripts', hours: 4 },
              { id: 'p4w13t3', name: 'App configuration in installer', hours: 3 },
              { id: 'p4w13t4', name: 'Uninstall functionality', hours: 3 },
              { id: 'p4w13t5', name: 'Unit tests (xUnit)', hours: 10 },
              { id: 'p4w13t6', name: 'Integration testing', hours: 8 },
              { id: 'p4w13t7', name: 'UI testing scenarios', hours: 6 },
              { id: 'p4w13t8', name: 'Performance testing', hours: 6 }
            ]
          },
          {
            id: 'p4w14',
            week: 14,
            name: 'Documentation & Final Polish',
            priority: 'high',
            dependencies: ['p4w13'],
            subtasks: [
              { id: 'p4w14t1', name: 'User manual', hours: 8 },
              { id: 'p4w14t2', name: 'Technical documentation', hours: 6 },
              { id: 'p4w14t3', name: 'Installation guide', hours: 4 },
              { id: 'p4w14t4', name: 'Troubleshooting guide', hours: 4 },
              { id: 'p4w14t5', name: 'End-to-end testing', hours: 8 },
              { id: 'p4w14t6', name: 'Performance optimization', hours: 6 },
              { id: 'p4w14t7', name: 'Bug fixes & polish', hours: 10 },
              { id: 'p4w14t8', name: 'Video demo recording', hours: 4 },
              { id: 'p4w14t9', name: 'Readme.txt preparation', hours: 2 }
            ]
          }
        ]
      }
    ]
  };

  const togglePhase = (phaseId) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };

  const toggleTask = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const getTaskProgress = (task) => {
    const completed = task.subtasks.filter(st => completedTasks[st.id]).length;
    return Math.round((completed / task.subtasks.length) * 100);
  };

  const getPhaseProgress = (phase) => {
    const allSubtasks = phase.tasks.flatMap(t => t.subtasks);
    const completed = allSubtasks.filter(st => completedTasks[st.id]).length;
    return Math.round((completed / allSubtasks.length) * 100);
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'critical': return 'text-red-600 bg-red-50';
      case 'high': return 'text-orange-600 bg-orange-50';
      case 'medium': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const GanttView = () => (
    <div className="mt-6">
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Timeline Overview (14 Tuần)</h3>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span>Phase 1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span>Phase 2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span>Phase 3</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span>Phase 4</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-14 gap-1 mb-2">
          {Array.from({length: 14}, (_, i) => (
            <div key={i} className="text-center text-xs font-medium text-gray-600">
              T{i+1}
            </div>
          ))}
        </div>
        
        <div className="space-y-2">
          {roadmapData.phases.map(phase => (
            <div key={phase.id} className="flex items-center gap-2">
              <div className="w-32 text-sm font-medium truncate">{phase.name.split(':')[0]}</div>
              <div className="flex-1 grid grid-cols-14 gap-1">
                {Array.from({length: 14}, (_, i) => {
                  const weekNum = i + 1;
                  const isActive = phase.weeks.includes(weekNum);
                  const progress = getPhaseProgress(phase);
                  return (
                    <div
                      key={i}
                      className={`h-8 rounded ${isActive ? phase.color : 'bg-gray-200'} relative overflow-hidden`}
                    >
                      {isActive && (
                        <div 
                          className="absolute inset-0 bg-white bg-opacity-40"
                          style={{width: `${100 - progress}%`, right: 0}}
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="w-16 text-sm text-right font-medium">{getPhaseProgress(phase)}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DetailedView = () => (
    <div className="space-y-4 mt-6">
      {roadmapData.phases.map(phase => {
        const phaseProgress = getPhaseProgress(phase);
        return (
          <div key={phase.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div 
              className={`${phase.color} text-white p-4 cursor-pointer flex items-center justify-between`}
              onClick={() => togglePhase(phase.id)}
            >
              <div className="flex items-center gap-3">
                {expandedPhases[phase.id] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                <div>
                  <h3 className="font-bold text-lg">{phase.name}</h3>
                  <p className="text-sm opacity-90">{phase.duration} | Tuần {phase.weeks.join(', ')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-2xl font-bold">{phaseProgress}%</div>
                  <div className="text-sm opacity-90">Hoàn thành</div>
                </div>
              </div>
            </div>
            
            {expandedPhases[phase.id] && (
              <div className="p-4 space-y-4">
                {phase.tasks.map(task => {
                  const taskProgress = getTaskProgress(task);
                  const totalHours = task.subtasks.reduce((sum, st) => sum + st.hours, 0);
                  
                  return (
                    <div key={task.id} className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-lg">{task.name}</h4>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(task.priority)}`}>
                              {task.priority.toUpperCase()}
                            </span>
                          </div>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span>📅 Tuần {task.week}</span>
                            <span>⏱️ {totalHours} giờ</span>
                            <span>✅ {task.subtasks.filter(st => completedTasks[st.id]).length}/{task.subtasks.length} tasks</span>
                          </div>
                          {task.dependencies.length > 0 && (
                            <div className="text-xs text-gray-500 mt-1">
                              📌 Phụ thuộc: {task.dependencies.join(', ')}
                            </div>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-3xl font-bold text-gray-700">{taskProgress}%</div>
                          <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                            <div 
                              className={`h-full ${phase.color} rounded-full transition-all`}
                              style={{width: `${taskProgress}%`}}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mt-4">
                        {task.subtasks.map(subtask => (
                          <div 
                            key={subtask.id}
                            className="flex items-center gap-3 p-2 hover:bg-white rounded cursor-pointer transition-colors"
                            onClick={() => toggleTask(subtask.id)}
                          >
                            {completedTasks[subtask.id] ? (
                              <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                            ) : (
                              <Circle size={20} className="text-gray-400 flex-shrink-0" />
                            )}
                            <span className={`flex-1 ${completedTasks[subtask.id] ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                              {subtask.name}
                            </span>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Clock size={14} />
                              {subtask.hours}h
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  const OverallStats = () => {
    const allTasks = roadmapData.phases.flatMap(p => p.tasks.flatMap(t => t.subtasks));
    const completedCount = allTasks.filter(t => completedTasks[t.id]).length;
    const totalHours = allTasks.reduce((sum, t) => sum + t.hours, 0);
    const completedHours = allTasks.filter(t => completedTasks[t.id]).reduce((sum, t) => sum + t.hours, 0);
    const overallProgress = Math.round((completedCount / allTasks.length) * 100);
    
    return (
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600 mb-1">Tổng Tiến Độ</div>
          <div className="text-3xl font-bold text-blue-600">{overallProgress}%</div>
          <div className="text-xs text-gray-500 mt-1">{completedCount}/{allTasks.length} tasks</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600 mb-1">Tổng Thời Gian</div>
          <div className="text-3xl font-bold text-purple-600">{totalHours}h</div>
          <div className="text-xs text-gray-500 mt-1">≈ {Math.round(totalHours/40)} tuần (40h/tuần)</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600 mb-1">Đã Hoàn Thành</div>
          <div className="text-3xl font-bold text-green-600">{completedHours}h</div>
          <div className="text-xs text-gray-500 mt-1">{Math.round((completedHours/totalHours)*100)}% thời gian</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <div className="text-sm text-gray-600 mb-1">Còn Lại</div>
          <div className="text-3xl font-bold text-orange-600">{totalHours - completedHours}h</div>
          <div className="text-xs text-gray-500 mt-1">≈ {Math.round((totalHours - completedHours)/40)} tuần</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-6">
          <h1 className="text-4xl font-bold mb-2">🚀 MyShop 2025 Roadmap</h1>
          <p className="text-blue-100 text-lg">
            Lộ trình thực thi chi tiết - 14 tuần (3.5 tháng) | Mục tiêu: 10/10 điểm
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded">
              📚 4 Phases
            </div>
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded">
              🎯 5 điểm cơ sở + 5 điểm tự chọn
            </div>
            <div className="bg-white bg-opacity-20 px-3 py-1 rounded">
              💻 C# WPF + PostgreSQL + EF Core
            </div>
          </div>
        </div>

        <OverallStats />

        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedView('gantt')}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                selectedView === 'gantt' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📊 Gantt Timeline
            </button>
            <button
              onClick={() => setSelectedView('detailed')}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                selectedView === 'detailed' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📝 Chi Tiết Tasks
            </button>
          </div>
        </div>

        {selectedView === 'gantt' ? <GanttView /> : <DetailedView />}

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">💡 Lưu Ý Quan Trọng</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>✅ Click vào từng subtask để đánh dấu hoàn thành và theo dõi tiến độ</li>
                <li>🔗 Chú ý dependencies giữa các tasks - hoàn thành đúng thứ tự để tránh refactor</li>
                <li>⏰ Mỗi task có ước lượng giờ - dùng để lập kế hoạch hàng tuần</li>
                <li>🎯 Priority: Critical &gt; High &gt; Medium - ưu tiên làm critical tasks trước</li>
                <li>📦 Phase 1 & 2 là nền tảng - KHÔNG nên skip để tránh technical debt</li>
                <li>🔌 Plugin architecture ở Phase 3 - có thể để cuối nếu thiếu thời gian</li>
                <li>📊 Mục tiêu tối thiểu: 5đ core + 5đ advanced = 10đ tổng</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              🛠️ Tech Stack Checklist
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Visual Studio 2022 + .NET 6/7</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>PostgreSQL + Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Entity Framework Core</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>WPF + Material Design</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>JWT Authentication</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Serilog/NLog</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>LiveCharts/OxyPlot</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>EPPlus (Excel)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>iTextSharp (PDF)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>WiX Toolset</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              📋 Deliverables Checklist
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Source code (cleaned)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Release build + Setup.exe</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Database migration scripts</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Readme.txt (features list)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>User manual</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Technical documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Installation guide</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Video demo (optional, &lt;5min)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Unit tests (&gt;70% coverage)</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Seed data (3+ categories, 66+ products)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-bold text-lg mb-3 text-green-800">🎯 Chiến Lược Thực Hiện</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✅ NÊN LÀM:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Commit code hàng ngày lên Git</li>
                <li>• Test ngay sau khi hoàn thành mỗi feature</li>
                <li>• Refactor code khi thấy code smell</li>
                <li>• Document complex logic ngay khi code</li>
                <li>• Tạo seed data đầy đủ từ đầu</li>
                <li>• Setup CI/CD pipeline sớm</li>
                <li>• Regular code review (nếu làm nhóm)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-2">❌ TRÁNH:</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Skip Phase 1 - sẽ phải rewrite sau</li>
                <li>• Hard-code connection strings</li>
                <li>• Ignore error handling</li>
                <li>• Over-engineer từ đầu</li>
                <li>• Để documentation ra phút chót</li>
                <li>• Làm tất cả advanced features cùng lúc</li>
                <li>• Bỏ qua testing cho đến cuối</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="font-bold text-lg mb-4">📅 Weekly Sprint Planning Template</h3>
          <div className="bg-gray-50 p-4 rounded text-sm font-mono">
            <div className="text-gray-600 mb-2">// Tuần [X]: [Tên Phase/Task]</div>
            <div className="text-blue-600">Sprint Goals:</div>
            <div className="ml-4 text-gray-700">
              - [ ] Goal 1: Complete [Feature Name]<br/>
              - [ ] Goal 2: Implement [Component]<br/>
              - [ ] Goal 3: Test & Fix bugs
            </div>
            <div className="text-blue-600 mt-3">Daily Tasks (Chia nhỏ theo ngày):</div>
            <div className="ml-4 text-gray-700">
              Mon: Setup + Architecture (8h)<br/>
              Tue: Core implementation (8h)<br/>
              Wed: UI development (8h)<br/>
              Thu: Integration + Testing (8h)<br/>
              Fri: Bug fixes + Documentation (8h)
            </div>
            <div className="text-blue-600 mt-3">Blockers & Risks:</div>
            <div className="ml-4 text-gray-700">
              - Risk: Learning curve với [Technology]<br/>
              - Mitigation: Allocate 2h/day for research
            </div>
          </div>
        </div>

        <div className="mt-6 bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="font-bold text-lg mb-3 text-purple-800">🏆 Điểm Cộng Chiến Lược (5 điểm tự chọn)</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded border border-purple-200">
              <div className="font-bold text-purple-700 mb-2">Ưu Tiên Cao (3đ)</div>
              <ul className="space-y-1 text-gray-700">
                <li>✅ Plugin Architecture (1đ)</li>
                <li>✅ Promotions System (1đ)</li>
                <li>✅ MVVM + DI (0.5đ + 0.5đ)</li>
              </ul>
              <div className="text-xs text-purple-600 mt-2">→ Đạt chuẩn kỹ thuật cao</div>
            </div>
            <div className="bg-white p-4 rounded border border-blue-200">
              <div className="font-bold text-blue-700 mb-2">Bổ Sung (1.5đ)</div>
              <ul className="space-y-1 text-gray-700">
                <li>• Responsive Layout (0.5đ)</li>
                <li>• Customer Management (0.5đ)</li>
                <li>• Auto-save (0.25đ)</li>
                <li>• Backup/Restore (0.25đ)</li>
              </ul>
              <div className="text-xs text-blue-600 mt-2">→ Tăng tính professional</div>
            </div>
            <div className="bg-white p-4 rounded border border-gray-200">
              <div className="font-bold text-gray-700 mb-2">Polish (0.5đ)</div>
              <ul className="space-y-1 text-gray-700">
                <li>• Obfuscation (0.25đ)</li>
                <li>• Trial Mode (0.25đ)</li>
              </ul>
              <div className="text-xs text-gray-600 mt-2">→ Production-ready</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShopRoadmap;