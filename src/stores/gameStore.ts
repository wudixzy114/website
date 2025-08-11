import {defineStore} from "pinia";
import {ref} from "vue";

export interface GameFeature {
    id: number,
    title: string,
    description: string,
    icon: string
}

export const useGameStore = defineStore('game',()=>{
    const features = ref<GameFeature[]>([
        {
            id: 1,
            title: '自由选择',
            description: '玩家可以自由选择学习方向，不受限制地发展角色',
            icon: 'heroicons:academic-cap'
        },
        {
            id: 2,
            title: 'AI驱动剧情',
            description: '利用最新AI技术，为玩家提供动态生成的剧情和互动',
            icon: 'heroicons:sparkles'
        },
        {
            id: 3,
            title: '古代背景',
            description: '沉浸于中国传统历史文化，体验那个时代的风云变幻',
            icon: 'heroicons:book-open'
        },
        {
            id: 4,
            title: '多线剧情',
            description: '习武、读书、经商等多种发展路线，每个选择都影响结局',
            icon: 'heroicons:code-branch'
        }
    ]);

    const selectedFeature = ref<GameFeature | null>(null)

    const developmentProgress = ref(10)

    const getFeatureById = (id: number) =>{
        return features.value.find(features =>features.id === id)
    }

    const setSelectedFeature = (feature: GameFeature | null) => {
        selectedFeature.value = feature
    }

    return {
        features,
        selectedFeature,
        developmentProgress,
        setSelectedFeature,
        getFeatureById
    }
})