import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOURCING_EXAMPLES } from '@/src/constants';
import { ProductCard } from '@/src/components/ProductCard';

export const Food = () => {
  const food = SOURCING_EXAMPLES.filter(p => p.category === 'food');

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-sage text-xs font-bold uppercase tracking-widest mb-4 block">Pure Nordic Taste</span>
          <h1 className="text-5xl font-bold mb-6">Premium Food Sourcing</h1>
          <p className="text-lg text-nordic-grey leading-relaxed">
            Sourced from the pristine forests and clean waters of Finland.
            We provide a direct link to any premium Nordic provisions you require.
          </p>
        </header>

        {/* Quality Banner */}
        <section className="mb-24 grid md:grid-cols-3 gap-8">
          {[
            { icon: Leaf, title: 'Direct Sourcing', desc: 'We source directly from sustainable Finnish farms and forests.' },
            { icon: ShieldCheck, title: 'Quality Control', desc: 'Ensuring every product meets premium European standards.' },
            { icon: Star, title: 'Bespoke Orders', desc: 'Tell us what you need, and we will find the best quality available.' },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-beige/20 rounded-3xl border border-beige/50 text-center">
              <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center text-sage soft-shadow mb-4">
                <item.icon size={24} />
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-nordic-grey">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Categories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {[
            { name: 'Packaged Food', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800' },
            { name: 'Organic Products', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800' },
            { name: 'Daily Essentials', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=800' },
            { name: 'Wild Forest Berries', img: '/images/wild_forest_berries.png' },
            { name: 'Wild Cloudberry Jam', img: '/images/cloudberry_jam.png' },
            { name: 'Nordic Provisions', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800' }
          ].map((cat) => (
            <div key={cat.name} className="group relative h-64 rounded-2xl overflow-hidden soft-shadow cursor-pointer">
              <div className="absolute inset-0 bg-nordic-black/20 group-hover:bg-nordic-black/40 transition-colors z-10" />
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-white font-bold text-xl">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sourcing Examples */}
        <div>
          <h3 className="text-3xl font-bold mb-12">Examples of what we source</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {food.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
