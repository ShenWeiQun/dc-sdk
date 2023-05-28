const EXAMPLE_LIST = [
  {
    name: '基础开始',
    folder: 'info',
    children: [
      {
        name: '开始',
        page: 'start.html',
      },
      {
        name: '坐标参考',
        page: 'coord.html',
      },
    ],
  },
  {
    name: '地图组件',
    folder: 'widget',
    children: [
      {
        name: '罗盘',
        page: 'compass.html',
      },
      {
        name: '层级控制',
        page: 'zoom_controller.html',
      },
      {
        name: '比例尺',
        page: 'distance_legend.html',
      },
      {
        name: '工具栏',
        page: 'locationbar.html',
      },
      {
        name: '鹰眼图',
        page: 'hawkeye_map.html',
      },
      {
        name: '加载蒙层',
        page: 'loading_mask.html',
      },
      {
        name: '右击菜单',
        page: 'contextmenu.html',
      },
      {
        name: '信息框',
        page: 'popup.html',
      },
      {
        name: '提示框',
        page: 'tooltip.html',
      },
      {
        name: '场景分割',
        page: 'scene_split.html',
      },
    ],
  },
  {
    name: '场景设置',
    folder: 'setting',
    children: [
      {
        name: '基础',
        page: 'base.html',
      },
      {
        name: '相机',
        page: 'camera.html',
      },
      {
        name: '地球',
        page: 'globe.html',
      },
      {
        name: '天空盒',
        page: 'skybox.html',
      },
      {
        name: '近地天空盒',
        page: 'ground_sky_box.html',
      },
    ],
  },
  {
    name: '场景事件',
    folder: 'event',
    children: [
      {
        name: '场景生命周期钩子',
        page: 'scene_hooks.html',
      },
      {
        name: '场景鼠标事件',
        page: 'viewer_mouse.html',
      },
      {
        name: '矢量图层鼠标事件',
        page: 'layer_mouse.html',
      },
      {
        name: '要素鼠标事件',
        page: 'overlay_mouse.html',
      },
      {
        name: '相机事件',
        page: 'camera.html',
      },
      {
        name: '时钟事件',
        page: 'clock.html',
      },
    ],
  },
  {
    name: '在线地图',
    folder: 'baseLayer',
    children: [
      {
        name: '高德地图',
        page: 'amap.html',
      },
      {
        name: '高德地图(偏移纠正)',
        page: 'amap_no_offset.html',
      },
      {
        name: 'Arcgis',
        page: 'arcgis.html',
      },
      {
        name: '百度地图',
        page: 'baidu.html',
      },
      {
        name: '百度地图(偏移纠正)',
        page: 'baidu_no_offset.html',
      },
      {
        name: '星图地图',
        page: 'geovis.html',
      },
      {
        name: '谷歌地图(已被墙)',
        page: 'google.html',
      },
      {
        name: '天地图',
        page: 'tdt.html',
      },
      {
        name: '腾讯地图',
        page: 'tencent.html',
      },
    ],
  },
  {
    name: '离线地图',
    folder: 'offline',
    children: [
      {
        name: '蓝色',
        page: 'blue.html',
      },
      {
        name: '日间',
        page: 'day.html',
      },
      {
        name: '影像',
        page: 'img.html',
      },
      {
        name: '夜晚',
        page: 'night.html',
      },
    ],
  },
  {
    name: '地形设置',
    folder: 'terrain',
    children: [],
  },
  {
    name: '要素图层',
    folder: 'layer',
    children: [
      {
        name: '矢量图层',
        page: 'vector.html',
      },
      {
        name: '3d-tiles图层',
        page: 'tileset.html',
      },
      {
        name: 'GeoJson图层',
        page: 'geojson.html',
      },
      {
        name: 'Html图层',
        page: 'html.html',
      },
      {
        name: '聚合图层',
        page: 'cluster_clustering.html',
      },
      {
        name: '聚合图层(圆)',
        page: 'cluster_circle.html',
      },
      {
        name: '经纬网格图层',
        page: 'graticule.html',
      },
    ],
  },
  {
    name: '基础要素',
    folder: 'overlay',
    children: [
      {
        name: '点',
        page: 'point_base.html',
      },
      {
        name: '图标点',
        page: 'point_icon.html',
      },
      {
        name: 'html点',
        page: 'point_html.html',
      },
      {
        name: '文字点',
        page: 'point_text.html',
      },
      {
        name: '图标点(大数量)',
        page: 'point_icon_m.html',
      },
      {
        name: '自定义图标点',
        page: 'point_icon_custom.html',
      },
      {
        name: '自定义文字点',
        page: 'point_text_custom.html',
      },
      {
        name: '线',
        page: 'polyline_base.html',
      },
      {
        name: '材质线',
        page: 'polyline_material.html',
      },
      {
        name: '颜色轨迹线',
        page: 'polyline_trail.html',
      },
      {
        name: '图片轨迹线',
        page: 'polyline_image_trail.html',
      },
      {
        name: '流动线',
        page: 'polyline_flow.html',
      },
      {
        name: '闪烁线',
        page: 'polyline_flicker.html',
      },
      {
        name: '发光线',
        page: 'polyline_lighting.html',
      },
      {
        name: '发光线',
        page: 'polyline_lighting.html',
      },
      {
        name: '发光轨迹线',
        page: 'polyline_lighting_trail.html',
      },
      {
        name: '面',
        page: 'polygon_base.html',
      },
      {
        name: '含洞面',
        page: 'polygon_holes.html',
      },
      {
        name: '高度面',
        page: 'polygon_height.html',
      },
      {
        name: '拉伸面',
        page: 'polygon_extruded.html',
      },
      {
        name: '圆',
        page: 'circle.html',
      },
      {
        name: '动画圆',
        page: 'circle_dynamic.html',
      },
      {
        name: '波纹圆',
        page: 'circle_wave.html',
      },
      {
        name: '消逝圆',
        page: 'circle_fade.html',
      },
      {
        name: '模糊圆',
        page: 'circle_blur.html',
      },
      {
        name: '扩散圆',
        page: 'circle_diffuse.html',
      },
      {
        name: '螺旋圆',
        page: 'circle_spiral.html',
      },
      {
        name: '脉冲圆',
        page: 'circle_pulse.html',
      },
      {
        name: '脉冲圆',
        page: 'circle_pulse.html',
      },
      {
        name: '多彩圆',
        page: 'circle_vary.html',
      },
      {
        name: '雷达线',
        page: 'radar_line.html',
      },
      {
        name: '图片雷达',
        page: 'radar_pic.html',
      },
      {
        name: '波纹雷达',
        page: 'radar_wave.html',
      },
      {
        name: '墙',
        page: 'wall.html',
      },
      {
        name: '轨迹墙',
        page: 'wall_trail.html',
      },
      {
        name: '图片轨迹墙',
        page: 'wall_image_trail.html',
      },
      {
        name: '球',
        page: 'ellipsoid.html',
      },
      {
        name: '轨迹球',
        page: 'ellipsoid_trail.html',
      },
      {
        name: '平面',
        page: 'plane.html',
      },
      {
        name: '圆柱',
        page: 'cylinder.html',
      },
      {
        name: '动态图标',
        page: 'dynamic_billboard.html',
      },
      {
        name: '标绘',
        page: 'plot.html',
      },
    ],
  },
  {
    name: '图元要素',
    folder: 'primitive',
    children: [],
  },
  {
    name: '模型要素',
    folder: 'model',
    children: [],
  },
  {
    name: '场景动画',
    folder: 'animation',
    children: [],
  },
  {
    name: '场景效果',
    folder: 'effect',
    children: [],
  },
  {
    name: '数据可视化',
    folder: 'datav',
    children: [],
  },
  {
    name: 'Echarts',
    folder: 'echarts',
    children: [],
  },
]
