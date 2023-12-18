<script setup>

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
          img_path: 'https://placehold.jp/100x100.png',
          detail: [
            { item_name: '乃木坂46', select_box: ['衛藤美彩', '橋本奈々未'], },
            { item_name: '櫻坂46', select_box: '', },
            { item_name: '日向坂46', select_box: '', },
          ],
        },
        {
          product_name: '推しメン別12色ペンライト',
          fee_including_tax: '4000',
          quantity: '3',
          img_path: 'https://placehold.jp/100x100.png',
          detail: [
            { item_name: '乃木坂46', select_box: ['衛藤美彩', '橋本奈々未'], },
            { item_name: '櫻坂46', select_box: '', },
            { item_name: '日向坂46', select_box: '', },
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
          img_path: 'https://placehold.jp/100x100.png',
          detail: [
            { item_name: 'メンバーの名前', select_box: '', },
            { item_name: '', select_box: '', },
            { item_name: '', select_box: '', },
            { item_name: '', select_box: '', },
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
</script>

<template>
  <main>
    <h1>order list</h1>
    <section>
      <ul>
        <li v-for="itemBox, itemBoxIndex in form.item_box" :key="itemBoxIndex">
          <p>購入商品{{ itemBox.number }}</p>
          <ul>
            <li v-for="item, index in itemBox.items" :key="index">
              <div class="flex">
                <img :src="item.img_path" :alt="`${item.product_name}の画像`">
                <div>
                  <p>{{ item.product_name }}</p>
                  <p>{{ Number(item.fee_including_tax).toLocaleString() }}円<span>（税込）</span></p>
                </div>
              </div>
              <div v-for="selectItem, selectItemIndex in item.detail" :key="selectItemIndex">
                <label>{{ selectItem.item_name }}</label>
                <select v-model="selectItem.select_box" :options="selectItem.select_box"></select>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </main>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul,li {
  list-style: none;
}

</style>
