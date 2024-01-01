<script setup>
import dayjs from 'dayjs';

const form = {
  status: '0',
  day: '2023-12-09 12:42',
  id: '1234567',
  name: '',
  name_kana: '',
  tel: '0123456789',
  mail_address: '',
  postal_code_1: '530',
  postal_code_2: '0001',
  prefecture: '東京都',
  address_1: '',
  address_2: '',
  belong_to_work_reunion: true,
  total_sum_including_tax: '',
  item_total_sum: '',
  postage: '600',
  optional_fee: '0',
  order_point: '0',
  destination: ['1'],
  item_box: [
    {
      number: 1,
      delivery_list: [
        {
          name: '白石 麻衣子',
          postal_code_1: '000',
          postal_code_2: '0000',
          prefecture: '群馬県',
          address_1: '前橋市XXX町',
          address_2: '1丁目2-3',
          building_name: '',
          specified_day: '1',
          deliverly_day: '2023-08-09 16:23',
          specified_time: '1',
          time: ['2'],
          note: '',
        }
      ],
      items: [
        {
          product_name: '箱推し12色ペンライト',
          fee_including_tax: '3500',
          quantity: '1',
          img_path: 'https://placehold.jp/300x300.png',
          detail: [
            { item_name: '乃木坂46', select_box: ['衛藤美彩', '橋本奈々未', '白石麻衣', '生田絵梨花', '与田祐希', '五百城茉央', '池田瑛紗'], },
            { item_name: '櫻坂46', select_box: ['渡辺梨加', '守屋麗奈', '森田ひかる', '土生瑞穂', '田村保乃', '山﨑天'], },
            { item_name: '日向坂46', select_box: ['小坂菜緒', '齊藤京子', '正源寺陽子',], },
          ],
        },
        {
          product_name: '推しメン別12色ペンライト',
          fee_including_tax: '4000',
          quantity: '3',
          img_path: 'https://placehold.jp/300x300.png',
          detail: [
            { item_name: '乃木坂46', select_box: ['衛藤美彩', '橋本奈々未', '白石麻衣', '生田絵梨花', '与田祐希', '五百城茉央', '池田瑛紗'], },
            { item_name: '櫻坂46', select_box: ['渡辺梨加', '守屋麗奈', '森田ひかる', '土生瑞穂', '田村保乃', '山﨑天'] },
            { item_name: '日向坂46', select_box: ['小坂菜緒', '齊藤京子', '正源寺陽子',], },
          ],
        },
      ],
    },
    {
      number: 2,
      delivery_list: [
        {
          name: '西野 七実',
          postal_code_1: '046',
          postal_code_2: '1234',
          prefecture: '大阪府',
          address_1: '大阪市XXX',
          address_2: '4丁目4-6',
          building_name: '乃木坂ビルディング 406号室',
          specified_day: '1',
          deliverly_day: '2023-01-30 10:34',
          specified_time: '1',
          time: ['4'],
          note: '',
        },
      ],
      items: [
        {
          product_name: 'マフラータオル',
          fee_including_tax: '1500',
          quantity: '2',
          img_path: 'https://placehold.jp/300x300.png',
          detail: [
            { item_name: 'メンバーの名前', select_box: ['衛藤美彩', '橋本奈々未', '白石麻衣', '生田絵梨花', '与田祐希', '五百城茉央', '池田瑛紗', '渡辺梨加', '守屋麗奈', '森田ひかる', '土生瑞穂', '田村保乃', '山﨑天'], },
          ],
        },
      ],
    }
  ],
  payment_method: '0',
  use_point: '2',
  user_hold_point: '530',
  point_note: '100',
  note: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。',
}

const currentDate = dayjs();
</script>

<template>

  <header class="fixed pl-3 md:pl-6 pt-2 md:pt-4 text-xl bg-white w-full">
    <h1>Sakamichi shop</h1>
  </header>

  <main class="py-24 px-2">

    <section>

      <h2 class="text-3xl mb-8 text-center">order list</h2>

      <div class="w-48 mx-auto mb-6">
        <p class="text-xs text-left mb-1">現在日時：{{ currentDate.format('YYYY/MM/DD hh:ss') }}</p>
        <p class="text-xs text-left">更新日：{{ dayjs(form.day).format('YYYY/MM/DD') }}</p>
      </div>
      <p class="text-sm text-left md:text-center mb-4">購入商品とお客様情報をご確認の上、お支払い情報にお進みください。</p>

      <div class="w-[20rem] md:w-[36rem] mx-auto shadow-xl rounded-3xl py-16 px-4 md:px-8">
        <ul>
          <li v-for="itemBox, itemBoxIndex in form.item_box" :key="itemBoxIndex" class="mb-12">
            <h2 class="text-lg font-bold text-left mb-2">購入商品{{ itemBox.number }}</h2>
            <ul>
              <li v-for="item, index in itemBox.items" :key="index" class="" v-bind:class="{ 'mb-8': index !== itemBox.items.length - 1 }">
                <div class="flex">
                  
                  <div class="flex items-start gap-x-4 flex-wrap md:flex-nowrap">
                    <img :src="item.img_path" :alt="`${item.product_name}の画像`" class="w-48 object-cover rounded-lg mb-3 mx-auto md:mb-0">
                    <div>
                      <p class="text-left text-base mb-1">{{ item.product_name }}</p>
                      <p class="text-left text-sm mb-4">{{ Number(item.fee_including_tax).toLocaleString() }}円<span class="text-xs">（税込）</span></p>
                      <ul class="text-left">
                        <li v-for="selectItem, selectItemIndex in item.detail" :key="selectItemIndex" class="" v-bind:class="{ 'mb-2': selectItemIndex !== item.detail.length -1 }">
                          <label class="text-sm w-28 inline-block">{{ selectItem.item_name }}</label>
                          <select v-model="selectItem.select_box" class="border border-gray-300 h-6 w-40 rounded-md">
                            <option v-for="option in selectItem.select_box" :key="option" :value="option">{{ option }}</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </li>
            </ul>
          </li>
        </ul>

        <hr />
        <h2 class="text-lg font-bold text-left mb-2 mt-4">購入者情報</h2>

        <hr />
        <h2 class="text-lg font-bold text-left mb-2 mt-4">お届け先</h2>

      </div>
    </section>
  </main>

  <div class="">
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul,li {
  list-style: none;
}
</style>
