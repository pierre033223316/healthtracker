<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.2">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// 初始化圖表</p>
<p class="p1">var stepsChart = new Chart(document.getElementById('stepsChart'), {</p>
<p class="p1"><span class="Apple-converted-space">    </span>type: 'line',</p>
<p class="p1"><span class="Apple-converted-space">    </span>data: {</p>
<p class="p1"><span class="Apple-converted-space">        </span>labels: ['2024-06-01', '2024-06-02', '2024-06-03'],</p>
<p class="p1"><span class="Apple-converted-space">        </span>datasets: [{</p>
<p class="p1"><span class="Apple-converted-space">            </span>label: '步數',</p>
<p class="p1"><span class="Apple-converted-space">            </span>data: [8000, 7500, 9000],</p>
<p class="p1"><span class="Apple-converted-space">            </span>borderColor: 'rgba(75, 192, 192, 1)',</p>
<p class="p1"><span class="Apple-converted-space">            </span>borderWidth: 1</p>
<p class="p1"><span class="Apple-converted-space">        </span>}]</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: {</p>
<p class="p1"><span class="Apple-converted-space">        </span>scales: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>y: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>beginAtZero: true</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">var caloriesChart = new Chart(document.getElementById('caloriesChart'), {</p>
<p class="p1"><span class="Apple-converted-space">    </span>type: 'line',</p>
<p class="p1"><span class="Apple-converted-space">    </span>data: {</p>
<p class="p1"><span class="Apple-converted-space">        </span>labels: ['2024-06-01', '2024-06-02', '2024-06-03'],</p>
<p class="p1"><span class="Apple-converted-space">        </span>datasets: [{</p>
<p class="p1"><span class="Apple-converted-space">            </span>label: '卡路里消耗',</p>
<p class="p1"><span class="Apple-converted-space">            </span>data: [300, 280, 320],</p>
<p class="p1"><span class="Apple-converted-space">            </span>borderColor: 'rgba(153, 102, 255, 1)',</p>
<p class="p1"><span class="Apple-converted-space">            </span>borderWidth: 1</p>
<p class="p1"><span class="Apple-converted-space">        </span>}]</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: {</p>
<p class="p1"><span class="Apple-converted-space">        </span>scales: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>y: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>beginAtZero: true</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">var sleepChart = new Chart(document.getElementById('sleepChart'), {</p>
<p class="p1"><span class="Apple-converted-space">    </span>type: 'line',</p>
<p class="p1"><span class="Apple-converted-space">    </span>data: {</p>
<p class="p1"><span class="Apple-converted-space">        </span>labels: ['2024-06-01', '2024-06-02', '2024-06-03'],</p>
<p class="p1"><span class="Apple-converted-space">        </span>datasets: [{</p>
<p class="p1"><span class="Apple-converted-space">            </span>label: '睡眠時間',</p>
<p class="p1"><span class="Apple-converted-space">            </span>data: [7, 6.5, 8],</p>
<p class="p1"><span class="Apple-converted-space">            </span>borderColor: 'rgba(255, 159, 64, 1)',</p>
<p class="p1"><span class="Apple-converted-space">            </span>borderWidth: 1</p>
<p class="p1"><span class="Apple-converted-space">        </span>}]</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>options: {</p>
<p class="p1"><span class="Apple-converted-space">        </span>scales: {</p>
<p class="p1"><span class="Apple-converted-space">            </span>y: {</p>
<p class="p1"><span class="Apple-converted-space">                </span>beginAtZero: true</p>
<p class="p1"><span class="Apple-converted-space">            </span>}</p>
<p class="p1"><span class="Apple-converted-space">        </span>}</p>
<p class="p1"><span class="Apple-converted-space">    </span>}</p>
<p class="p1">});</p>
<p class="p2"><br></p>
<p class="p1">// 添加數據功能</p>
<p class="p1">function addData() {</p>
<p class="p1"><span class="Apple-converted-space">    </span>var date = prompt('輸入日期 (YYYY-MM-DD):');</p>
<p class="p1"><span class="Apple-converted-space">    </span>var steps = prompt('輸入步數:');</p>
<p class="p1"><span class="Apple-converted-space">    </span>var calories = prompt('輸入卡路里消耗:');</p>
<p class="p1"><span class="Apple-converted-space">    </span>var sleep = prompt('輸入睡眠時間 (小時):');</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>stepsChart.data.labels.push(date);</p>
<p class="p1"><span class="Apple-converted-space">    </span>stepsChart.data.datasets[0].data.push(steps);</p>
<p class="p1"><span class="Apple-converted-space">    </span>stepsChart.update();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>caloriesChart.data.labels.push(date);</p>
<p class="p1"><span class="Apple-converted-space">    </span>caloriesChart.data.datasets[0].data.push(calories);</p>
<p class="p1"><span class="Apple-converted-space">    </span>caloriesChart.update();</p>
<p class="p2"><br></p>
<p class="p1"><span class="Apple-converted-space">    </span>sleepChart.data.labels.push(date);</p>
<p class="p1"><span class="Apple-converted-space">    </span>sleepChart.data.datasets[0].data.push(sleep);</p>
<p class="p1"><span class="Apple-converted-space">    </span>sleepChart.update();</p>
<p class="p1">}</p>
</body>
</html>
